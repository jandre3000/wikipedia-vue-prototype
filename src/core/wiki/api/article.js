import axios from "axios";

function fetchRandomArticle(language) {
  const api = `https://${language}.wikipedia.org/api/rest_v1/page/random/mobile-sections`;
  return axios.get(api).then(response => process(response.data));
}

function fetchMetadata(language, title) {
  const api = `//${language}.wikipedia.org/api/rest_v1/page/metadata/${title}`;
  return axios.get(api).then(response => response.data);
}

function fetchMedia(language, title) {
  const api = `https://${language}.wikipedia.org/api/rest_v1/page/media/${title}`;
  return axios.get(api).then(response => response.data);
}

function fetchArticle(language, title, api) {
  const apiUrl = `https://${language}.wikipedia.org/api/rest_v1/page/mobile-sections/${title}`;

  if (!language) {
    throw new Error("Language is null");
  }

  if (!title) {
    return fetchRandomArticle(language);
  }

  if (api === "action") {
    return fetchArticleActionAPI(language, title);
  } else {
    return axios.get(apiUrl).then(response => process(response.data));
  }
}

function fetchArticleActionAPI(language, title) {
  const baseUrl = `https://${language}.wikipedia.org/w/api.php`;
  return axios
    .get(baseUrl, {
      params: {
        action: "parse",
        format: "json",
        page: title,
        prop: "indicators|text|headhtml",
        utf8: 1,
        formatversion: "latest",
        redirects: "true",
        origin: "*"
      }
    })
    .then(response => {
      const data = {
        lead: {
          normalizedtitle: response.data.parse.title,
          sections: [
            {
              text: response.data.parse.text
            }
          ]
        },
        indicators: response.data.parse.indicators,
        remaining: { sections: [] }
      };
      return process(data);
    });
}

function process(articleData) {
  const sections = [];
  const toc = [];
  const articleSections = [
    ...articleData.lead.sections,
    ...articleData.remaining.sections
  ];
  for (let i = 0; i < articleSections.length; i++) {
    const section = articleSections[i];
    if (section.text) {
      sections.push({
        id: section.id,
        toclevel: section.toclevel,
        anchor: section.anchor,
        heading: section.line,
        html: section.text
      });
      continue;
    }
    if (section.toclevel === 1) {
      toc.push({
        id: section.anchor,
        name: section.line,
        children: []
      });
    } else if (section.toclevel === 2) {
      toc[toc.length - 1].children.push({
        id: section.anchor,
        name: section.line
      });
    }
  }

  return {
    title: articleData.lead.normalizedtitle,
    description: articleData.lead.description,
    image: articleData.lead.image,
    issues: articleData.lead.issues,
    geo: articleData.lead.geo,
    indicators: articleData.indicators,
    pronunciation: articleData.lead.pronunciation,
    languagecount: articleData.lead.languagecount,
    wikidataId: articleData.lead.wikibase_item,
    history: {
      lastmodifier: articleData.lead.lastmodifier,
      lastmodified: articleData.lead.lastmodified,
      lastrevision: articleData.lead.revision
    },
    sections: sections,
    toc: toc
  };
}

export default {
  fetchArticle,
  fetchMetadata,
  fetchMedia,
  fetchArticleActionAPI
};

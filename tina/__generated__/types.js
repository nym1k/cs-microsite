export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const ConfigPartsFragmentDoc = gql`
    fragment ConfigParts on Config {
  __typename
  siteTitle
  siteDescription
  canonicalUrl
  ogImage
  gtmId
  fbPixelId
  heroLogoSrc
  heroBgSrc
  heroVideoPlaylistUrl
  heroCtaButtons {
    __typename
    label
    url
  }
  heroShopLinks {
    __typename
    label
    url
  }
  social {
    __typename
    facebook
    twitter
    instagram
    youtube
  }
  contactEmail
  pressEmail
  mailchimpFormUrl
  footerCreditUrl
}
    `;
export const ReleasesPartsFragmentDoc = gql`
    fragment ReleasesParts on Releases {
  __typename
  title
  year
  releaseDate
  label
  formats
  artwork
  bandcampAlbumId
  bandcampPackageId
  backgroundColor
  accentColor
  order
  body
}
    `;
export const BioPartsFragmentDoc = gql`
    fragment BioParts on Bio {
  __typename
  photo
  photoCredit
  photoCreditUrl
  body
}
    `;
export const ConfigDocument = gql`
    query config($relativePath: String!) {
  config(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ConfigParts
  }
}
    ${ConfigPartsFragmentDoc}`;
export const ConfigConnectionDocument = gql`
    query configConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ConfigFilter) {
  configConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ConfigParts
      }
    }
  }
}
    ${ConfigPartsFragmentDoc}`;
export const ReleasesDocument = gql`
    query releases($relativePath: String!) {
  releases(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ReleasesParts
  }
}
    ${ReleasesPartsFragmentDoc}`;
export const ReleasesConnectionDocument = gql`
    query releasesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ReleasesFilter) {
  releasesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ReleasesParts
      }
    }
  }
}
    ${ReleasesPartsFragmentDoc}`;
export const BioDocument = gql`
    query bio($relativePath: String!) {
  bio(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...BioParts
  }
}
    ${BioPartsFragmentDoc}`;
export const BioConnectionDocument = gql`
    query bioConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: BioFilter) {
  bioConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...BioParts
      }
    }
  }
}
    ${BioPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    config(variables, options) {
      return requester(ConfigDocument, variables, options);
    },
    configConnection(variables, options) {
      return requester(ConfigConnectionDocument, variables, options);
    },
    releases(variables, options) {
      return requester(ReleasesDocument, variables, options);
    },
    releasesConnection(variables, options) {
      return requester(ReleasesConnectionDocument, variables, options);
    },
    bio(variables, options) {
      return requester(BioDocument, variables, options);
    },
    bioConnection(variables, options) {
      return requester(BioConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

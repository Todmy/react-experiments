function extractItems(data) {
  const hasSingleQuery = Object.keys(data).length === 1;
  const aliasLink = data.item || data.items;

  if (!hasSingleQuery && !aliasLink) {
    throw new Error(`Make sure that query expects list of 'items'`)
  } else if (hasSingleQuery) {
    return Object.values(data)[0]
  } else {
    return aliasLink;
  }

}

export {
  extractItems,
}
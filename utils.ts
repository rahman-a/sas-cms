export function getQueryString(queries, key?) {
  if (!queries) return ''
  if (queries instanceof Array) {
    return queries.length > 0
      ? new URLSearchParams({ [key]: queries.join(',') }).toString()
      : ''
  }
  const queriesData = {}
  for (const key in queries) {
    if (queries[key]) {
      queriesData[key] = queries[key]
    }
  }
  return Object.keys(queriesData).length > 0
    ? '?' + new URLSearchParams({ ...queriesData }).toString()
    : ''
}

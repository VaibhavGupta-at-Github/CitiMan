function handleEnterSubmit(t, e, a, s) {
  t.data &&
    "submit" === t.data.metadata.triggeredBy &&
    (t.data.results && t.data.results.fuzzySearch.results[0]
      ? e.call(this, t.data.results.fuzzySearch.results[0], s)
      : a.setMessage("No result found"));
}
window.handleEnterSubmit = window.handleEnterSubmit || handleEnterSubmit;

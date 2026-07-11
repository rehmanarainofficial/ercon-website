export function ProductSpecificationTable({ specifications = [] }) {
  const groups = specifications
    .map((group) => ({
      ...group,
      rows: group.rows.filter((row) => row.value),
    }))
    .filter((group) => group.rows.length)

  if (!groups.length) return null

  return (
    <section className="bg-surface-soft section-space">
      <div className="container-main">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Technical information</p>
          <h2 className="mt-5 text-compact-display font-bold text-ink">Specifications available from verified product data.</h2>
        </div>
        <div className="mt-10 grid gap-5">
          {groups.map((group) => (
            <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-card" key={group.group}>
              <h3 className="border-b border-line px-5 py-4 text-lg font-bold text-ink">{group.group}</h3>
              <table className="w-full border-collapse">
                <tbody className="divide-y divide-line">
                  {group.rows.map((row) => (
                    <tr className="grid gap-2 px-5 py-4 text-left sm:table-row" key={row.label}>
                      <th className="text-sm font-semibold text-muted sm:w-[34%] sm:px-5 sm:py-4 sm:align-top" scope="row">
                        {row.label}
                      </th>
                      <td className="text-sm leading-7 text-ink sm:px-5 sm:py-4">
                        {row.value}
                        {row.unit ? ` ${row.unit}` : ''}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

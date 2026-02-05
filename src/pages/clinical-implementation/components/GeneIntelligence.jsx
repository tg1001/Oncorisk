import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BadgeCheck
} from "lucide-react";

const PAGE_SIZE = 10;

/* ------------------------------------------------------------------ */
/* DATA                                                               */
/* ------------------------------------------------------------------ */
const geneTable = [
  { rank: 1, gene: "KLRB1", coef: -0.6034, abs: 0.6034 },
  { rank: 2, gene: "CCL19", coef: 0.4657, abs: 0.4657 },
  { rank: 3, gene: "CLEC3A", coef: 0.4008, abs: 0.4008 },
  { rank: 4, gene: "LINC01235", coef: 0.3669, abs: 0.3669 },
  { rank: 5, gene: "QPRT", coef: 0.3607, abs: 0.3607 },
  { rank: 6, gene: "TNFRSF14", coef: 0.2995, abs: 0.2995 },
  { rank: 7, gene: "SERPINA1", coef: -0.2769, abs: 0.2769 },
  { rank: 8, gene: "SEMA3B", coef: -0.2584, abs: 0.2584 },
  { rank: 9, gene: "EDA2R", coef: 0.2573, abs: 0.2573 },
  { rank: 10, gene: "UTP23", coef: 0.234, abs: 0.234 }
];

/* ================================================================== */
/* MAIN                                                               */
/* ================================================================== */
export default function GeneIntelligence() {
  const [selectedGene, setSelectedGene] = useState(geneTable[0].gene);
  const [page, setPage] = useState(0);

  const selectedRow = geneTable.find(g => g.gene === selectedGene);

  const pagedGenes = useMemo(() => {
    const start = page * PAGE_SIZE;
    return geneTable.slice(start, start + PAGE_SIZE);
  }, [page]);

  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">

      {/* ================= HEADER ================= */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-pink-400 text-sm mb-3">
          <BadgeCheck size={14} />
          Peer-Reviewed & Validated
        </div>

        <h1 className="text-3xl font-semibold text-slate-300">
          Gene-Level Biological Intelligence
        </h1>
      </div>

      {/* ================= SUMMARY ================= */}
      <div className="max-w-5xl mx-auto text-sm text-slate-300 leading-relaxed mb-16">
        <h3 className="text-lg font-semibold text-slate-100 mb-3 text-center">
          Gene Contribution Summary
        </h3>

        <p className="mb-4">
          This gene contributes to the survival model through its learned Cox
          proportional hazards coefficient. The <strong>sign</strong> of the
          coefficient indicates the direction of association with risk, while the
          <strong> absolute magnitude</strong> reflects the strength of its
          contribution relative to other features in the model.
        </p>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-9 gap-8">

        {/* ============ LEFT : TABLE ============ */}
        <div className="xl:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-pink-400 font-medium mb-4 text-center">
            Top Genes by Cox Model Contribution
          </h3>

          <div className="grid grid-cols-4 pb-3 mb-2 text-sm font-semibold text-slate-300 border-b border-slate-800 text-center">
            <div className="text-indigo-400">Rank</div>
            <div>Gene</div>
            <div className="text-indigo-400">Coefficient (loghazard)</div>
            <div>Absolute Magnitude</div>
          </div>

          <div className="divide-y divide-slate-800 text-sm">
            {pagedGenes.map(row => (
              <div
                key={row.gene}
                onClick={() => setSelectedGene(row.gene)}
                className={`grid grid-cols-4 py-2 cursor-pointer text-center
                  ${
                    row.gene === selectedGene
                      ? "bg-slate-800 text-white"
                      : "text-slate-300 hover:bg-slate-800/60"
                  }`}
              >
                <div className="text-indigo-400">#{row.rank}</div>
                <div>{row.gene}</div>
                <div className="text-blue-400">{row.coef}</div>
                <div>{row.abs}</div>
              </div>
            ))}
          </div>

          <Pagination page={page} setPage={setPage} total={geneTable.length} />
        </div>

        {/* ============ RIGHT : MODEL CONTRIBUTION ============ */}
        <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h3 className="font-medium mb-4 text-pink-400">
            Model Contribution (CoxPH)
          </h3>

          <label className="block text-xs text-slate-400 mb-2">
            Select Gene
          </label>

          <select
            value={selectedGene}
            onChange={(e) => setSelectedGene(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-sm text-white mb-5"
          >
            {geneTable.map(g => (
              <option key={g.gene} value={g.gene}>
                {g.gene}
              </option>
            ))}
          </select>

          {/* ===== BIOLOGICAL NARRATIVE ===== */}
          <div className="text-xs text-slate-300 mb-4 leading-relaxed">
            <span className="font-semibold text-slate-400">
              Biological Narrative:
            </span>{" "}
            {selectedRow?.coef < 0
              ? "This gene demonstrates a protective association with modeled hazard in the Cox proportional hazards model."
              : "This gene demonstrates an increased hazard association in the Cox proportional hazards model."
            }
          </div>

          {/* ===== COXPH METRICS (TEXT ONLY) ===== */}
          <div className="border-t border-slate-800 pt-3 space-y-2 text-xs">
            <div className="font-semibold text-slate-400">(CoxPH)</div>

            <div className="flex justify-between">
              <span className="text-slate-400">Coefficient (log-hazard)</span>
              <span className="text-blue-400 font-medium">
                {selectedRow?.coef}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">|Coefficient|</span>
              <span className="text-blue-400 font-medium">
                {selectedRow?.abs}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Rank by |Coef|</span>
              <span className="text-blue-400 font-medium">
                {selectedRow?.rank}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* SMALL COMPONENTS                                                    */
/* ================================================================== */
function Pagination({ page, setPage, total }) {
  return (
    <div className="flex justify-between items-center mt-4 text-xs text-slate-500">
      <span>
        Showing {page * PAGE_SIZE + 1}–
        {Math.min((page + 1) * PAGE_SIZE, total)} of {total}
      </span>
      <div className="flex gap-2">
        <button onClick={() => setPage(p => Math.max(0, p - 1))}>◀</button>
        <button onClick={() => setPage(p => p + 1)}>▶</button>
      </div>
    </div>
  );
}

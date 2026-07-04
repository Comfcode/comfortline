import { RefreshCw, AlertTriangle, Car, Truck } from "lucide-react";
import { useGetBorderQueue, getGetBorderQueueQueryKey } from "@workspace/api-client-react";
import { useLang } from "@/context/language-context";

const REFETCH_INTERVAL_MS = 3 * 60 * 1000;

const CHECKPOINT_NAMES_EN: Record<string, string> = {
  "Бенякони": "Benyakoni",
  "Берестовица": "Berestovitsa",
  "Брест": "Brest",
  "Брузги": "Bruzgi",
  "Григоровщина": "Grigorovshchina",
  "Каменный Лог": "Kamenny Log",
  "Козловичи": "Kozlovichi",
};

function displayName(name: string, isRu: boolean): string {
  if (isRu) return name;
  return CHECKPOINT_NAMES_EN[name] ?? name;
}

function loadLabel(total: number, isRu: boolean) {
  if (total === 0) {
    return { text: isRu ? "Пусто" : "Empty", className: "text-emerald-400" };
  }
  if (total <= 5) {
    return { text: isRu ? "Свободно" : "Light", className: "text-emerald-400" };
  }
  if (total <= 20) {
    return { text: isRu ? "Умеренно" : "Moderate", className: "text-amber-400" };
  }
  return { text: isRu ? "Загружено" : "Heavy", className: "text-red-400" };
}

export function BorderQueueWidget() {
  const { lang } = useLang();
  const isRu = lang === "ru";

  const { data, isLoading, isError, isFetching, refetch } = useGetBorderQueue({
    query: {
      queryKey: getGetBorderQueueQueryKey(),
      refetchInterval: REFETCH_INTERVAL_MS,
      staleTime: 60_000,
    },
  });

  const checkpoints = data?.checkpoints ?? [];
  const showError = (isError || data?.error) && checkpoints.length === 0;

  return (
    <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 md:p-6 my-6">
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
        <div>
          <h3 className="font-bold text-foreground text-sm md:text-base">
            {isRu ? "Живая очередь на границе" : "Live border queue"}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {isRu
              ? "Данные с mon.declarant.by, автообновление каждые 3 минуты"
              : "Data from mon.declarant.by, auto-refreshes every 3 minutes"}
          </p>
        </div>
        <button
          type="button"
          onClick={() => refetch()}
          disabled={isFetching}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors disabled:opacity-50 shrink-0"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${isFetching ? "animate-spin" : ""}`} />
          {isRu ? "Обновить" : "Refresh"}
        </button>
      </div>

      {isLoading && (
        <p className="text-sm text-muted-foreground">
          {isRu ? "Загрузка данных…" : "Loading data…"}
        </p>
      )}

      {showError && (
        <div className="flex items-start gap-2 text-sm text-red-400">
          <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
          <span>
            {isRu
              ? "Не удалось получить данные. Попробуйте обновить страницу позже."
              : "Could not load live data. Please try refreshing later."}
          </span>
        </div>
      )}

      {!isLoading && !showError && checkpoints.length > 0 && (
        <>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs md:text-sm min-w-[440px]">
              <thead>
                <tr className="text-muted-foreground border-b border-border">
                  <th className="text-left py-2 px-1 font-semibold">
                    {isRu ? "КПП" : "Checkpoint"}
                  </th>
                  <th className="text-center py-2 px-1 font-semibold">
                    <Car className="h-3.5 w-3.5 inline" />
                  </th>
                  <th className="text-center py-2 px-1 font-semibold">
                    <Truck className="h-3.5 w-3.5 inline" />
                  </th>
                  <th className="text-center py-2 px-1 font-semibold">
                    {isRu ? "Всего" : "Total"}
                  </th>
                  <th className="text-right py-2 px-1 font-semibold">
                    {isRu ? "Статус" : "Status"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {checkpoints.map((cp) => {
                  const load = loadLabel(cp.total, isRu);
                  return (
                    <tr key={cp.name} className="border-b border-border/50 last:border-0">
                      <td className="py-2 px-1 text-foreground font-medium">
                        {displayName(cp.name, isRu)}
                      </td>
                      <td className="py-2 px-1 text-center text-foreground/85">{cp.cars}</td>
                      <td className="py-2 px-1 text-center text-foreground/85">{cp.trucks}</td>
                      <td className="py-2 px-1 text-center text-foreground/85 font-semibold">
                        {cp.total}
                      </td>
                      <td className={`py-2 px-1 text-right font-semibold ${load.className}`}>
                        {load.text}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {data?.updatedAt && (
            <p className="text-xs text-muted-foreground mt-3">
              {isRu ? "По состоянию на: " : "As of: "}
              {data.updatedAt}
              {data.stale && (isRu ? " (кэш)" : " (cached)")}
            </p>
          )}
        </>
      )}
    </div>
  );
}

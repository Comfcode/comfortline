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

type BorderQueueWidgetProps = {
  className?: string;
  size?: "default" | "lg";
};

export function BorderQueueWidget({ className = "my-6", size = "default" }: BorderQueueWidgetProps = {}) {
  const { lang } = useLang();
  const isRu = lang === "ru";
  const isLg = size === "lg";

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
    <div className={`rounded-2xl border border-primary/30 bg-primary/5 ${isLg ? "p-6 md:p-7" : "p-5 md:p-6"} ${className}`}>
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
        <div>
          <h3 className={`font-bold text-foreground ${isLg ? "text-base md:text-lg" : "text-sm md:text-base"}`}>
            {isRu ? "Живая очередь на границе" : "Live border queue"}
          </h3>
          <p className={`text-muted-foreground mt-0.5 ${isLg ? "text-sm" : "text-xs"}`}>
            {isRu
              ? "Данные с mon.declarant.by, автообновление каждые 3 минуты"
              : "Data from mon.declarant.by, auto-refreshes every 3 minutes"}
          </p>
        </div>
        <button
          type="button"
          onClick={() => refetch()}
          disabled={isFetching}
          className={`inline-flex items-center gap-1.5 font-semibold text-primary hover:text-primary/80 transition-colors disabled:opacity-50 shrink-0 ${isLg ? "text-sm" : "text-xs"}`}
        >
          <RefreshCw className={`${isLg ? "h-4 w-4" : "h-3.5 w-3.5"} ${isFetching ? "animate-spin" : ""}`} />
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
          {/* Compact stacked list — used on narrow screens so nothing is clipped off-screen */}
          <div className={`divide-y divide-border/50 ${isLg ? "sm:hidden" : "min-[420px]:hidden"}`}>
            {checkpoints.map((cp) => {
              const load = loadLabel(cp.total, isRu);
              return (
                <div key={cp.name} className="py-2.5 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className={`text-foreground font-medium truncate ${isLg ? "text-sm" : "text-xs"}`}>
                      {displayName(cp.name, isRu)}
                    </p>
                    <p className={`flex items-center gap-2.5 text-muted-foreground mt-1 ${isLg ? "text-xs" : "text-[11px]"}`}>
                      <span className="inline-flex items-center gap-1">
                        <Car className="h-3 w-3" />
                        {cp.cars}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Truck className="h-3 w-3" />
                        {cp.trucks}
                      </span>
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className={`text-foreground font-semibold ${isLg ? "text-sm" : "text-xs"}`}>{cp.total}</p>
                    <p className={`font-semibold mt-0.5 ${load.className} ${isLg ? "text-xs" : "text-[11px]"}`}>
                      {load.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full table — used once there is enough horizontal room */}
          <div className={`overflow-x-auto -mx-1 ${isLg ? "hidden sm:block" : "hidden min-[420px]:block"}`}>
            <table className={`w-full ${isLg ? "text-sm md:text-base min-w-[480px]" : "text-xs md:text-sm min-w-[440px]"}`}>
              <thead>
                <tr className="text-muted-foreground border-b border-border">
                  <th className={`text-left font-semibold ${isLg ? "py-2.5 px-2" : "py-2 px-1"}`}>
                    {isRu ? "КПП" : "Checkpoint"}
                  </th>
                  <th className={`text-center font-semibold ${isLg ? "py-2.5 px-2" : "py-2 px-1"}`}>
                    <Car className={isLg ? "h-4 w-4 inline" : "h-3.5 w-3.5 inline"} />
                  </th>
                  <th className={`text-center font-semibold ${isLg ? "py-2.5 px-2" : "py-2 px-1"}`}>
                    <Truck className={isLg ? "h-4 w-4 inline" : "h-3.5 w-3.5 inline"} />
                  </th>
                  <th className={`text-center font-semibold ${isLg ? "py-2.5 px-2" : "py-2 px-1"}`}>
                    {isRu ? "Всего" : "Total"}
                  </th>
                  <th className={`text-right font-semibold ${isLg ? "py-2.5 px-2" : "py-2 px-1"}`}>
                    {isRu ? "Статус" : "Status"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {checkpoints.map((cp) => {
                  const load = loadLabel(cp.total, isRu);
                  return (
                    <tr key={cp.name} className="border-b border-border/50 last:border-0">
                      <td className={`text-foreground font-medium ${isLg ? "py-2.5 px-2" : "py-2 px-1"}`}>
                        {displayName(cp.name, isRu)}
                      </td>
                      <td className={`text-center text-foreground/85 ${isLg ? "py-2.5 px-2" : "py-2 px-1"}`}>{cp.cars}</td>
                      <td className={`text-center text-foreground/85 ${isLg ? "py-2.5 px-2" : "py-2 px-1"}`}>{cp.trucks}</td>
                      <td className={`text-center text-foreground/85 font-semibold ${isLg ? "py-2.5 px-2" : "py-2 px-1"}`}>
                        {cp.total}
                      </td>
                      <td className={`text-right font-semibold ${load.className} ${isLg ? "py-2.5 px-2" : "py-2 px-1"}`}>
                        {load.text}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {data?.updatedAt && (
            <p className={`text-muted-foreground mt-3 ${isLg ? "text-sm" : "text-xs"}`}>
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

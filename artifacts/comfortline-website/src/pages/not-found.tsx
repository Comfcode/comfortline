import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 — страница не найдена | ComfortLine";
    const existing = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const prevContent = existing?.content;
    let el = existing;
    let createdByUs = false;
    if (!el) {
      el = document.createElement("meta");
      el.name = "robots";
      document.head.appendChild(el);
      createdByUs = true;
    }
    el.content = "noindex, nofollow";
    return () => {
      if (!el) return;
      if (createdByUs) {
        // Remove the tag we created so other routes don't inherit noindex.
        el.remove();
      } else if (prevContent !== undefined) {
        el.content = prevContent;
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">404 — страница не найдена</h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Запрошенная страница не существует. Перейдите на{" "}
            <a href="/" className="text-primary hover:underline">главную</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

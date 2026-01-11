const WEBHOOK_URL = "https://n8nbrno.com.br/webhook/4bdea25a-dab3-4f4f-975d-e083f77f38d0";
const GCLID_KEY = "gclid";

type EventType = "acesso" | "clique_whatsapp" | "clique_ligacao";

interface TrackingPayload {
  evento: EventType;
  pagina: string;
  gclid: string;
}

function getGclidFromUrl(): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get("gclid");
}

function saveGclid(gclid: string): void {
  localStorage.setItem(GCLID_KEY, gclid);
}

function getStoredGclid(): string {
  return localStorage.getItem(GCLID_KEY) || "";
}

async function sendEvent(evento: EventType, pagina: string = "home"): Promise<void> {
  const payload: TrackingPayload = {
    evento,
    pagina,
    gclid: getStoredGclid(),
  };

  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error("Tracking error:", error);
  }
}

export function initTracking(): void {
  const gclidFromUrl = getGclidFromUrl();
  if (gclidFromUrl) {
    saveGclid(gclidFromUrl);
  }
}

export function trackPageAccess(pagina: string = "home"): void {
  sendEvent("acesso", pagina);
}

export function trackWhatsAppClick(pagina: string = "home"): void {
  sendEvent("clique_whatsapp", pagina);
}

export function trackPhoneClick(pagina: string = "home"): void {
  sendEvent("clique_ligacao", pagina);
}

export function useTracking() {
  return {
    trackWhatsAppClick,
    trackPhoneClick,
    trackPageAccess,
  };
}

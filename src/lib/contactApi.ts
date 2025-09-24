const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContact(form: ContactPayload) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "Erreur d’envoi");
  return data as { ok: true; id: string };
}

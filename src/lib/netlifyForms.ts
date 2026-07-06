type NetlifyFormPayload = Record<string, string | number | boolean | null | undefined>;

export async function submitNetlifyForm(formName: string, payload: NetlifyFormPayload) {
  const body = new URLSearchParams();
  body.set('form-name', formName);

  Object.entries(payload).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      body.set(key, String(value));
    }
  });

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error(`Netlify form submission failed with status ${response.status}`);
  }
}

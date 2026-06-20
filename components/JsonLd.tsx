// Renders a JSON-LD structured-data block. Accepts a single schema object
// or an array of them (an array is valid JSON-LD with multiple entities).
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

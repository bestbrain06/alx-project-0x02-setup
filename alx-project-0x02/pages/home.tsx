import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="p-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        title="Luxury Villa"
        content="Enjoy breathtaking ocean views and world-class amenities."
      />
      <Card
        title="Mountain Escape"
        content="Relax in the serenity of snow-capped peaks and cozy interiors."
      />
      <Card
        title="City Lights Apartment"
        content="Experience modern living with stunning skyline views."
      />
    </div>
  );
}

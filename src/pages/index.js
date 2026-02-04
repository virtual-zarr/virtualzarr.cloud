import {
  Layout,
  HeroBanner,
  EcosystemCards,
  Benefits,
  Heritage,
  Supporters,
} from "@/components";

export default function HomePage() {
  return (
    <Layout
      title="Virtual Zarr"
      description="Cloud-optimize your scientific data without copying it. Access legacy formats like netCDF and HDF5 as cloud-native Zarr stores."
    >
      <HeroBanner />
      <EcosystemCards />
      <Benefits />
      <Heritage />
      <Supporters />
    </Layout>
  );
}

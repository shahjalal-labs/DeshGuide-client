import useFetchData from "../../../hooks/useFetchData";
import Spinner from "../../shared/Layout/Spinner";
import PackageCard from "./PackageCard";

const Packages = () => {
  const { data: packages = [], loading } = useFetchData(
    "packages/random?limit=all",
  );

  console.log(packages, "TourismAndGuides.jsx", 7);
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
        Our Featured Packages
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <Spinner />
        ) : (
          packages.map((pkg) => <PackageCard key={pkg._id} pkg={pkg} />)
        )}
      </div>

      <div className="divider my-6"></div>
    </section>
  );
};

export default Packages;

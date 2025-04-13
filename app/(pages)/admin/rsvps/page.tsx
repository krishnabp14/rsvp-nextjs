import { getRSVPS } from "@/app/actions/getRSVP";
import { NavBar } from "@/components/NavBar";
import { RSVPTable, RSVPTableRow } from "@/components/RSVPTable";

const rsvps = async () => {
  const result = await getRSVPS();

  return (
    <div className="mt-6 p-4 w-full max-w-[1200px] mx-auto flex flex-col gap-8">
      <NavBar />
      <div className="border-[1px] rounded border-gray-300 p-4">
        <RSVPTable data={result.data as RSVPTableRow[]} />
      </div>
    </div>
  );
};

export default rsvps;

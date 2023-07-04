import { FC } from "react";
import { AdminMasonry } from "../AdminMasonry";
import { AdminBrick } from "../AdminBrick";
import { AdminAddressSetter } from "../AdminAddressSetter";
import {
  useGlobalOwnerPendingOwner,
  useGlobalPauserPaused,
  usePrepareGlobalPauserPause,
  usePrepareGlobalPauserUnpause,
} from "@/generated";
import { useWalletClient } from "wagmi";
import { TxButton } from "@/components/ui";

export const AdminPause: FC = () => {
  const { data: paused } = useGlobalPauserPaused({
    watch: true,
  });
  const pausePreparation = usePrepareGlobalPauserPause();
  const unpausePreparation = usePrepareGlobalPauserUnpause();

  return (
    <AdminMasonry className="columns-1 w-[400px]">
      <AdminBrick title="Global pause">
        <p>
          Calling pause will temporarily prevent any non-admin activity on all contracts of the Ledgity
          DeFi ecosystem. Note that this doesn&apos;t includes the LTY token contract, which is
          non-pausable.
        </p>
        <div className="flex gap-6 justify-center items-center">
          <TxButton preparation={pausePreparation} disabled={paused} size="medium">
            Pause
          </TxButton>
          <TxButton preparation={unpausePreparation} disabled={!paused} size="medium">
            Unpause
          </TxButton>
        </div>
      </AdminBrick>
    </AdminMasonry>
  );
};

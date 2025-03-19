// components/MatchList.tsx
import { FunctionComponent } from "preact";
import MatchCard from "./MatchCard.tsx";

interface Match {
  id: number;
  date: string;
  status: string;
  home: string;
  away: string;

}

const MatchList: FunctionComponent<{ matches: Match[] }> = ({ matches }) => {
  return (
    <div class="grid">
      {matches.length > 0 ? (
        matches.map((match) => <MatchCard key={match.id} match={match} />)
      ) : (
        <p>No hay partidos disponibles.</p>
      )}
    </div>
  );
};

export default MatchList;

import { Badge } from "@chakra-ui/react";

interface Props {
  score: string;
}

const CriticScore = ({ score }: Props) => {
  let scoreNum = parseInt(score);

  let color = scoreNum > 75 ? "green" : scoreNum > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize={"14px"} paddingX={2} borderRadius={"4px"}>
      {score}
    </Badge>
  );
};

export default CriticScore;

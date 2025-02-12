import { View, Text } from "@/components/general/Themed";
import { useEffect, useState } from "react";
import { calculateDurationHourMinutes } from "@/utils/time";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function WorkoutHeader() {
  const [timer, setTimer] = useState("0:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const duration = calculateDurationHourMinutes(new Date(), new Date());
      setTimer(duration);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={{ gap: 10, backgroundColor: "transparent", marginBottom: 20 }}>
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>Workout tracker</Text>
      <Text style={{ fontSize: 18 }}>
        <FontAwesome5 name="clock" size={18} color="gray" /> {timer}
      </Text>
    </View>
  );
}

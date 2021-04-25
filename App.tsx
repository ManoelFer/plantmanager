import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";

import AppLoading from "expo-app-loading";
import Routes from "./src/routes";

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import { PlantProps } from "./src/libs/storage";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  //Get data by notifications
  useEffect(() => {
    const subscriptions = Notifications.addNotificationReceivedListener(
      async (notificaiton) => {
        const data = notificaiton.request.content.data.plant as PlantProps;
        console.log(data);
      }
    );

    return () => subscriptions.remove();

    // async function notificaiton() {
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log("Notificações agendadas :>> ", data);
    // }

    // notificaiton();
  });

  if (!fontsLoaded) return <AppLoading />;

  return <Routes />;
}

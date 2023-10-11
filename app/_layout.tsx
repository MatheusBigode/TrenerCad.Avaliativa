//import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";


export default function AppLayout() {
  return (
    <Drawer >
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Bem-vindo!",
          title: "Bem-vindo!",
        }}
      />
      <Drawer.Screen
        name="telaRegistrar" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Registrar",
          title: "Registrar"
        }}
      />
      <Drawer.Screen
        name="telaElenco" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Elenco",
          title: "Elenco"
        }}
      />
    </Drawer>
  );
}
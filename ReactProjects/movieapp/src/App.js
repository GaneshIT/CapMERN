import AppContent from "./contentcomponent";
import AppFooter from "./footercomponent";
import AppHeader from "./headercomponent";
export default function App(){
  return(
    <div>
      <AppHeader location="Bangalore"></AppHeader>    
      <AppContent></AppContent>
      <AppFooter></AppFooter>
    </div>
  );
}
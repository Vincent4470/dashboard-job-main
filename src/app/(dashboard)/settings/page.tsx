import OverViewForm from "@/components/form/OverviewForm";
import SocialMediaForm from "@/components/form/SocialMediaForm";
import TeamsForm from "@/components/form/TeamForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC } from "react";

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = ({}) => {
  return (
    <div>
      <div className="font-semibold text-3xl mb-5">Settings</div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverViewForm />
        </TabsContent>
        <TabsContent value="socialLinks">
          <SocialMediaForm />
        </TabsContent>
        <TabsContent value="teams">
          <TeamsForm/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;

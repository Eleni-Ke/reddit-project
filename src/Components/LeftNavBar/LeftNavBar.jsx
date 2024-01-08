import { Button } from "react-bootstrap";
import PopularPosts from "./PopularPosts";
import Resources from "./Resources";
import Topics from "./Topics";

const LeftNavBar = () => {
  return (
    <div className="flex">
      <Button>Arrow Popular</Button>
      <Topics />
      <Resources />
      <PopularPosts />
      <p>Reddit, Inc. © 2024. All rights reserved.</p>
    </div>
  );
};
export default LeftNavBar;

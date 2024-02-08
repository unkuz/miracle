import "module-alias/register";
import { app } from "@@/app";

const PORT = 8888;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

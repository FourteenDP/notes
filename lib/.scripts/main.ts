import * as path from "path";
const root = path.resolve(__dirname, "../..");
process.chdir(root);
process.stdout.write(process.cwd() + "\n");

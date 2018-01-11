import { app } from "electron";
import * as fs from "fs";
import { existsSync, mkdirSync } from "fs";
import { readFileSync, writeFileSync } from "original-fs";

export class ConfigReader {
  private userPath: string;
  private filePath: string;
  private json: any;
  constructor(configName: string) {
    const fileName: string = configName;
    let userPath: string = app.getPath("appData");
    this.json = null;
    // 如果the_next_app_config没有被创建，那就创建它
    // if has no the_next_app_config exists create it
    if (!existsSync(userPath + "/the_next_app_config")) {
      if (!existsSync(userPath)) {
        mkdirSync(userPath);
      }
      mkdirSync(userPath + "/the_next_app_config");
    }
    userPath = userPath + "/the_next_app_config";
    this.filePath = userPath + "/" + fileName + ".json";
    if (existsSync(this.filePath)) {
      this.json = JSON.parse(readFileSync(this.filePath).toString());
    } else if (existsSync(__dirname + "/../../json_template/" + fileName + ".json")) {
      this.json = JSON.parse(readFileSync(__dirname + "/../../json_template/" + fileName + ".json").toString());
      writeFileSync(this.filePath, JSON.stringify(this.json, null, 2).toString());
    } else {
      console.log("no found " + fileName + " defalut json, using {}");
      this.json = {};
      writeFileSync(this.filePath, JSON.stringify(this.json, null, 2).toString());
    }
  }
  public getConfig(name: string, Default?: any) {
    if (this.json[name] != null) {
      return this.json[name];
    } else if (Default != null) {
      this.json[name] = Default;
      return Default;
    }
    return null;
  }
  public save(): void {
    writeFileSync(this.filePath, JSON.stringify(this.json, null, 2).toString());
  }
}

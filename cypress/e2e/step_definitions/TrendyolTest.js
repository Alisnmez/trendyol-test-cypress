import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import CommonActions from '@pages/CommonActions';

const commonActions = new CommonActions();

Given("{string} sayfasina gidilir", (urlKey) => {
  commonActions.navigateToURL(urlKey);
});

Then("beklenir", () => {
  commonActions.waitt();
});

Then("{string} objesine hover yapilir", (path) => {
  commonActions.hoverOver(path);
});

Then("{string} objesine tiklanir", (path) => {
  commonActions.clickElement(path);
});

Then("{string} objesinin gorunur olmasi beklenir", (path) => {
  commonActions.objectQuery(path);
});

Then("{string} objesine tiklanir ve yeni sayfaya gidilir", (path) => {
  commonActions.clickElementAndGoToNewPage(path);
});

Then("bir onceki sayfaya gidilir", () => {
  commonActions.goBack()
});

Then("{string} objesine tiklanir ve {string} objesinin gelmesi beklenir", (path,text) => {
  commonActions.clickElementAndWaitForText(path,text);
});

Then("{string} ve {string} degerleri karsilastirilir", (path1,path2) => {
  commonActions.compareValues(path1,path2);
});

Then("{string} objesine {string} yazilir", (path,text) => {
  commonActions.typeInput(path,text)
});




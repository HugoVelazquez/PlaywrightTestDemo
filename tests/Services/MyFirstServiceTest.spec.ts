import { test, expect } from '@playwright/test';
import { AnalizeImageList } from './Request';


test('test', async ({ }) => {
  const analizeImageList = new AnalizeImageList();
  const  analizeImageListBody = await analizeImageList.getBody();
  const  url = await analizeImageList.getUrl();
  const response = await analizeImageList.callAPI(analizeImageListBody, url);

  expect(response?.status).toBe(200);
 
});
import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId :"l8alwsow",
  dataset : "production",
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: "sksQfWVO0FdUnCQp7y1j22BTCs32o2MoNr6F9cCUPtA1yaKwyHp5VyMrNRsNERNcd4skd3Cro3ulQXq2AsbBEQ1MlVjeDLqjsRlGvCmJKUUECB4LFtRLjbtHAd0UsDy2chA7JzErwD60wB0dtBreVvkmkaVMDT5vTgf4sPI9wyCyKI4TqJJs"

})
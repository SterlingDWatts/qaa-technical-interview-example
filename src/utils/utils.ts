import { v4 as uuidv4 } from "uuid";

export const pushToDataLayer = (
  module: string,
  event: string,
  data: unknown,
  other: { [key: string]: unknown } = {}
) => {
  window.dataLayer.push({
    id: uuidv4(),
    module,
    event,
    data: JSON.stringify(data),
    ...other,
  });
};

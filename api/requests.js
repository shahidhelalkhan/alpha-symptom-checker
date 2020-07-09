const ApiMedicHost = "https://sandbox-healthservice.priaid.ch";
const lang = "en-gb";
const format = "json";

const Request = {
  getSymptoms(token) {
    return fetch(
      `${ApiMedicHost}/symptoms?language=${lang}&format=${format}&token=${token}`,
      {
        method: "GET",
      }
    ).then((res) => res.json());
  },
};

export default Request;

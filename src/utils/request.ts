import fetch from "node-fetch";
import { RequestInit } from "node-fetch";

type Headers = { [key: string]: string };

type RequestOptions = {
  url: string;
  headers?: Headers;
  mode?: "same-origin" | "cors" | "navigate" | "no-cors" | "omit";
};

type ResponseData = { [key: string]: any };

export const get = async ({
  url,
  headers,
  mode,
}: RequestOptions): Promise<ResponseData> => {
  try {
    let res = await fetch(url, {
      method: "GET",
      headers,
      mode,
    } as RequestInit);
    if (res.status === 200) {
      let json = await res.json();
      return json as Promise<any>;
    } else {
      throw Error(`Error in GET: ${res.status} `);
    }
  } catch (e) {
    console.error(e);
  }
};

export const post = async ({ url, headers, mode, body }: any): Promise<any> => {
  try {
    let res = await fetch(url, {
      method: "POST",
      headers,
      mode,
      body: JSON.stringify(body),
    } as RequestInit);
    if (res.status === 200) {
      let json = await res.json();
      return json;
    } else {
      throw Error(`Error in POST: ${res.status} `);
    }
  } catch (e) {
    console.error(e);
  }
};

export const put = async ({ url, headers, mode, body }: any): Promise<any> => {
  try {
    let res = await fetch(url, {
      method: "PUT",
      headers,
      mode,
      body: JSON.stringify(body),
    } as RequestInit);
    if (res.status === 200) {
      let json = await res.json();
      return json;
    } else {
      throw Error(`Error in POST: ${res.status} `);
    }
  } catch (e) {
    console.error(e);
  }
};

export const patch = async ({
  url,
  headers,
  mode,
  body,
}: any): Promise<any> => {
  try {
    let res = await fetch(url, {
      method: "PUT",
      headers,
      mode,
      body: JSON.stringify(body),
    } as RequestInit);
    if (res.status === 200) {
      let json = await res.json();
      return json;
    } else {
      throw Error(`Error in PATCH: ${res.status} `);
    }
  } catch (e) {
    console.error(e);
  }
};

export const remove = async ({
  url,
  headers,
  mode,
  body,
}: any): Promise<any> => {
  try {
    let res = await fetch(url, {
      method: "PUT",
      headers,
      mode,
      body: JSON.stringify(body),
    } as RequestInit);
    if (res.status === 200) {
      let json = await res.json();
      return json;
    } else {
      throw Error(`Error in DELETE: ${res.status} `);
    }
  } catch (e) {
    console.error(e);
  }
};

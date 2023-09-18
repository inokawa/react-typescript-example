// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dummySignInApi = (_: {
  name: string;
  password: string;
}): Promise<string> => {
  return new Promise((res) => {
    setTimeout(() => {
      res("dummy");
    }, 1000);
  });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const dummySignOutApi = (_: any): Promise<void> => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, 1000);
  });
};

export const signIn = async (
  name: string,
  password: string,
): Promise<string | Error> => {
  try {
    const token = await dummySignInApi({ name, password });
    return token;
  } catch (e) {
    if (e instanceof Error) {
      return e;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new Error(e as any);
  }
};

export const signOut = async (): Promise<void | Error> => {
  try {
    await dummySignOutApi({});
  } catch (e) {
    if (e instanceof Error) {
      return e;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new Error(e as any);
  }
};

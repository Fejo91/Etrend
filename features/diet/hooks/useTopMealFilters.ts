import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TOP_BREAKFAST_FILTER_STORAGE_KEY = "@sajat_etrend_top_breakfast_only";
const TOP_TIZORAI_FILTER_STORAGE_KEY = "@sajat_etrend_top_tizorai_only";
const TOP_LUNCH_FILTER_STORAGE_KEY = "@sajat_etrend_top_lunch_only";
const TOP_UZSONNA_FILTER_STORAGE_KEY = "@sajat_etrend_top_uzsonna_only";
const TOP_DINNER_FILTER_STORAGE_KEY = "@sajat_etrend_top_dinner_only";

export function useTopMealFilters() {
  const [showTopBreakfastOnly, setShowTopBreakfastOnly] = useState(false);
  const [showTopTizoraiOnly, setShowTopTizoraiOnly] = useState(false);
  const [showTopLunchOnly, setShowTopLunchOnly] = useState(false);
  const [showTopUzsonnaOnly, setShowTopUzsonnaOnly] = useState(false);
  const [showTopDinnerOnly, setShowTopDinnerOnly] = useState(false);

  const [hasLoadedTopBreakfastPreference, setHasLoadedTopBreakfastPreference] =
    useState(false);
  const [hasLoadedTopTizoraiPreference, setHasLoadedTopTizoraiPreference] =
    useState(false);
  const [hasLoadedTopLunchPreference, setHasLoadedTopLunchPreference] =
    useState(false);
  const [hasLoadedTopUzsonnaPreference, setHasLoadedTopUzsonnaPreference] =
    useState(false);
  const [hasLoadedTopDinnerPreference, setHasLoadedTopDinnerPreference] =
    useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadTopBreakfastPreference = async () => {
      try {
        const stored = await AsyncStorage.getItem(
          TOP_BREAKFAST_FILTER_STORAGE_KEY
        );
        if (!isMounted) return;

        if (stored === "true" || stored === "false") {
          setShowTopBreakfastOnly(stored === "true");
        }
      } catch {
      } finally {
        if (isMounted) setHasLoadedTopBreakfastPreference(true);
      }
    };

    loadTopBreakfastPreference();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadTopDinnerPreference = async () => {
      try {
        const stored = await AsyncStorage.getItem(
          TOP_DINNER_FILTER_STORAGE_KEY
        );
        if (!isMounted) return;

        if (stored === "true" || stored === "false") {
          setShowTopDinnerOnly(stored === "true");
        }
      } catch {
      } finally {
        if (isMounted) setHasLoadedTopDinnerPreference(true);
      }
    };

    loadTopDinnerPreference();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadTopUzsonnaPreference = async () => {
      try {
        const stored = await AsyncStorage.getItem(
          TOP_UZSONNA_FILTER_STORAGE_KEY
        );
        if (!isMounted) return;

        if (stored === "true" || stored === "false") {
          setShowTopUzsonnaOnly(stored === "true");
        }
      } catch {
      } finally {
        if (isMounted) setHasLoadedTopUzsonnaPreference(true);
      }
    };

    loadTopUzsonnaPreference();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadTopLunchPreference = async () => {
      try {
        const stored = await AsyncStorage.getItem(
          TOP_LUNCH_FILTER_STORAGE_KEY
        );
        if (!isMounted) return;

        if (stored === "true" || stored === "false") {
          setShowTopLunchOnly(stored === "true");
        }
      } catch {
      } finally {
        if (isMounted) setHasLoadedTopLunchPreference(true);
      }
    };

    loadTopLunchPreference();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadTopTizoraiPreference = async () => {
      try {
        const stored = await AsyncStorage.getItem(
          TOP_TIZORAI_FILTER_STORAGE_KEY
        );
        if (!isMounted) return;

        if (stored === "true" || stored === "false") {
          setShowTopTizoraiOnly(stored === "true");
        }
      } catch {
      } finally {
        if (isMounted) setHasLoadedTopTizoraiPreference(true);
      }
    };

    loadTopTizoraiPreference();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!hasLoadedTopBreakfastPreference) return;

    AsyncStorage.setItem(
      TOP_BREAKFAST_FILTER_STORAGE_KEY,
      showTopBreakfastOnly ? "true" : "false"
    ).catch(() => {});
  }, [showTopBreakfastOnly, hasLoadedTopBreakfastPreference]);

  useEffect(() => {
    if (!hasLoadedTopTizoraiPreference) return;

    AsyncStorage.setItem(
      TOP_TIZORAI_FILTER_STORAGE_KEY,
      showTopTizoraiOnly ? "true" : "false"
    ).catch(() => {});
  }, [showTopTizoraiOnly, hasLoadedTopTizoraiPreference]);

  useEffect(() => {
    if (!hasLoadedTopLunchPreference) return;

    AsyncStorage.setItem(
      TOP_LUNCH_FILTER_STORAGE_KEY,
      showTopLunchOnly ? "true" : "false"
    ).catch(() => {});
  }, [showTopLunchOnly, hasLoadedTopLunchPreference]);

  useEffect(() => {
    if (!hasLoadedTopUzsonnaPreference) return;

    AsyncStorage.setItem(
      TOP_UZSONNA_FILTER_STORAGE_KEY,
      showTopUzsonnaOnly ? "true" : "false"
    ).catch(() => {});
  }, [showTopUzsonnaOnly, hasLoadedTopUzsonnaPreference]);

  useEffect(() => {
    if (!hasLoadedTopDinnerPreference) return;

    AsyncStorage.setItem(
      TOP_DINNER_FILTER_STORAGE_KEY,
      showTopDinnerOnly ? "true" : "false"
    ).catch(() => {});
  }, [showTopDinnerOnly, hasLoadedTopDinnerPreference]);

  return {
    showTopBreakfastOnly,
    setShowTopBreakfastOnly,
    showTopTizoraiOnly,
    setShowTopTizoraiOnly,
    showTopLunchOnly,
    setShowTopLunchOnly,
    showTopUzsonnaOnly,
    setShowTopUzsonnaOnly,
    showTopDinnerOnly,
    setShowTopDinnerOnly,
  };
}
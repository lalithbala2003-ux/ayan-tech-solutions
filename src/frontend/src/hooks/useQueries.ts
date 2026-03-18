import { useMutation, useQuery } from "@tanstack/react-query";
import type { ContactSubmission } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllCaseStudies() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["caseStudies"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCaseStudies();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllInsights() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["insights"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllInsights();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllEvents() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllEvents();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (submission: ContactSubmission) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitContactForm(submission);
    },
  });
}

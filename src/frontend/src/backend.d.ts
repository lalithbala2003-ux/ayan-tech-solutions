import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CaseStudy {
    id: string;
    client: string;
    title: string;
    summary: string;
    category: string;
}
export type Time = bigint;
export interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: Time;
}
export interface Insight {
    id: string;
    title: string;
    date: bigint;
    summary: string;
    category: string;
}
export interface Event {
    id: string;
    title: string;
    date: bigint;
    language: string;
    registrationUrl: string;
    location: string;
}
export interface backendInterface {
    createCaseStudy(caseStudy: CaseStudy): Promise<void>;
    createEvent(event: Event): Promise<void>;
    createInsight(insight: Insight): Promise<void>;
    deleteCaseStudy(id: string): Promise<void>;
    deleteEvent(id: string): Promise<void>;
    deleteInsight(id: string): Promise<void>;
    getAllCaseStudies(): Promise<Array<CaseStudy>>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllEvents(): Promise<Array<Event>>;
    getAllInsights(): Promise<Array<Insight>>;
    getCaseStudy(id: string): Promise<CaseStudy>;
    getEvent(id: string): Promise<Event>;
    getInsight(id: string): Promise<Insight>;
    submitContactForm(submission: ContactSubmission): Promise<void>;
    updateCaseStudy(id: string, updatedCaseStudy: CaseStudy): Promise<void>;
    updateEvent(id: string, updatedEvent: Event): Promise<void>;
    updateInsight(id: string, updatedInsight: Insight): Promise<void>;
}

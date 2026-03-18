import Text "mo:core/Text";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Int "mo:core/Int";
import Runtime "mo:core/Runtime";

actor {
  // Types
  type Insight = {
    id : Text;
    title : Text;
    category : Text;
    summary : Text;
    date : Int;
  };

  type Event = {
    id : Text;
    title : Text;
    date : Int;
    location : Text;
    language : Text;
    registrationUrl : Text;
  };

  type CaseStudy = {
    id : Text;
    title : Text;
    category : Text;
    client : Text;
    summary : Text;
  };

  type ContactSubmission = {
    id : Text;
    name : Text;
    email : Text;
    company : Text;
    message : Text;
    timestamp : Time.Time;
  };

  // Comparison Modules
  module Insight {
    public func compare(a : Insight, b : Insight) : Order.Order {
      Text.compare(a.id, b.id);
    };
  };

  module Event {
    public func compare(a : Event, b : Event) : Order.Order {
      Text.compare(a.id, b.id);
    };
  };

  module CaseStudy {
    public func compare(a : CaseStudy, b : CaseStudy) : Order.Order {
      Text.compare(a.id, b.id);
    };
  };

  module ContactSubmission {
    public func compare(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  // Persistent Storage
  let insights = Map.empty<Text, Insight>();
  let events = Map.empty<Text, Event>();
  let caseStudies = Map.empty<Text, CaseStudy>();
  let contactSubmissions = Map.empty<Text, ContactSubmission>();

  // Insights CRUD
  public shared ({ caller }) func createInsight(insight : Insight) : async () {
    if (insights.containsKey(insight.id)) { Runtime.trap("Insight already exists!") };
    insights.add(insight.id, insight);
  };

  public shared ({ caller }) func updateInsight(id : Text, updatedInsight : Insight) : async () {
    switch (insights.get(id)) {
      case (null) { Runtime.trap("Insight not found!") };
      case (?_) { insights.add(id, updatedInsight) };
    };
  };

  public shared ({ caller }) func deleteInsight(id : Text) : async () {
    if (not insights.containsKey(id)) { Runtime.trap("Insight not found!") };
    insights.remove(id);
  };

  public query ({ caller }) func getInsight(id : Text) : async Insight {
    switch (insights.get(id)) {
      case (null) { Runtime.trap("Insight not found!") };
      case (?insight) { insight };
    };
  };

  public query ({ caller }) func getAllInsights() : async [Insight] {
    insights.values().toArray().sort();
  };

  // Events CRUD
  public shared ({ caller }) func createEvent(event : Event) : async () {
    if (events.containsKey(event.id)) { Runtime.trap("Event already exists!") };
    events.add(event.id, event);
  };

  public shared ({ caller }) func updateEvent(id : Text, updatedEvent : Event) : async () {
    switch (events.get(id)) {
      case (null) { Runtime.trap("Event not found!") };
      case (?_) { events.add(id, updatedEvent) };
    };
  };

  public shared ({ caller }) func deleteEvent(id : Text) : async () {
    if (not events.containsKey(id)) { Runtime.trap("Event not found!") };
    events.remove(id);
  };

  public query ({ caller }) func getEvent(id : Text) : async Event {
    switch (events.get(id)) {
      case (null) { Runtime.trap("Event not found!") };
      case (?event) { event };
    };
  };

  public query ({ caller }) func getAllEvents() : async [Event] {
    events.values().toArray().sort();
  };

  // Case Studies CRUD
  public shared ({ caller }) func createCaseStudy(caseStudy : CaseStudy) : async () {
    if (caseStudies.containsKey(caseStudy.id)) { Runtime.trap("Case study already exists!") };
    caseStudies.add(caseStudy.id, caseStudy);
  };

  public shared ({ caller }) func updateCaseStudy(id : Text, updatedCaseStudy : CaseStudy) : async () {
    switch (caseStudies.get(id)) {
      case (null) { Runtime.trap("Case study not found!") };
      case (?_) { caseStudies.add(id, updatedCaseStudy) };
    };
  };

  public shared ({ caller }) func deleteCaseStudy(id : Text) : async () {
    if (not caseStudies.containsKey(id)) { Runtime.trap("Case study not found!") };
    caseStudies.remove(id);
  };

  public query ({ caller }) func getCaseStudy(id : Text) : async CaseStudy {
    switch (caseStudies.get(id)) {
      case (null) { Runtime.trap("Case study not found!") };
      case (?caseStudy) { caseStudy };
    };
  };

  public query ({ caller }) func getAllCaseStudies() : async [CaseStudy] {
    caseStudies.values().toArray().sort();
  };

  // Contact Submissions (Create & Read)
  public shared ({ caller }) func submitContactForm(submission : ContactSubmission) : async () {
    if (contactSubmissions.containsKey(submission.id)) { Runtime.trap("Submission already exists!") };
    contactSubmissions.add(submission.id, submission);
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    let array = contactSubmissions.values().toArray();
    array.sort();
  };
};

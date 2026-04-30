CASE 5: ARTIFICIAL INTELLIGENCE IN SYSTEMS ENGINEERING—AUTONOMOUS VEHICLES


Note: Much of the information in this case study is derived from the United States National Transportation Safety Board (NTSB) report on automation (2019a). Page numbers are indicated.

Background On March 18, 2018, a pedestrian walking a bicycle was fatally struck by a 2017 Volvo XC90 Uber vehicle operating an Automated Driving System (ADS) then under development by Uber’s Advanced Technologies Group (ATG). The Volvo’s advanced driver assistance system was disabled to prevent conflicts with its radar which operated on the same frequency as the radar for Uber’s ATG ADS (p. 15).

At the time of the pedestrian fatality, the ATG-ADS had used one lidar and eight radars to measure distance; several cameras for detecting vehicles, pedestrians, reading traffic lights, and classifying detected objects; and various sensors that had been recently calibrated for telemetry, positioning, monitoring of people and objects, communication, acceleration, and angular rates. It also had a human-machine interface (HMI) tablet and a Global Positioning System (GPS) used solely to assure that the car was on an approved and pre-mapped route before engaging the ADS. The ADS allowed the vehicle to operate at a maximum speed of 45 mph (p. 7), to travel only on urban and rural roads, and under all lighting and weather conditions except for snow accumulation. The ADS system was easily disengaged; until then, almost all of its data was recorded, with the exception noted below of lost data occurred whenever an alternative determination of an object was made by ADS (e.g., shifting from an “object” in the road to an oncoming “vehicle” ahead).

Approach Designing the interactions of a human and a machine to form into a team (or system) that also acts autonomously requires significant shifts in thinking, modeling, and practice. This begins with changing the unit of analysis from individual humans or programmable machines to teams.

The ADS constructed a virtual environment from the objects that its sensors detected, tracked, classified, and then prioritized based on fusion processes (p. 8). ADS predicted and detected any perceived object’s goals and paths as part of its classification system. However, if classifications were made and then changed, as happened in this case (e.g., from “object” to “vehicle” and back to “object”), the prior tracking history was discarded. A flaw since corrected. Also, pedestrians outside of a crosswalk were not assigned a predicted track. Another flaw since corrected.

When ADS detected an emergency (p. 9), it suppressed taking any action for one second to avoid false alarms. After the one second delay, the car’s self-braking or evasion could begin. Another major flaw since corrected (p. 15). If a collision could not have been avoided, an auditory warning was to be given to the operator at the same time that the vehicle was to be slowed (in this case, the vehicle may have also begun to slow because an intersection was being approached).

As shown in Figure 6.1, using the recorded data to replay the accident, before impact: Radar first detected the pedestrian 5.6 seconds; Lidar made its first detection at 5.2 seconds, classified the object as unknown and static, changed to a static vehicle at 4.2 seconds on a path predicted to be a miss, reclassified to “other” and static but back again to vehicle between 3.7 to 2.7 seconds, each re-classification discarding its previous prediction history for that object; then a bicycle, but static and a miss at 2.6 seconds; then unknown, static and a miss at 1.5 seconds; then classified the object a bicycle and an unavoidable hazard at 1.2 seconds, the categorization of a hazard immediately initiating “action suppression;” after the 1 seconds pause, finally an auditory alert was sounded at 0.2 seconds; the operator took control at 0.02 seconds before impact; and the operator selected brakes at 0.7 seconds after impact.




FIGURE 6.1 Timeline of vehicle impact. From NTSB (2019a). used with permission. All other rights reserved.





The ADS failed to correctly predict the detected object’s path, and only determined it to be a hazard at 1.2 seconds before impact, causing any action to be suppressed for one second but, and as a consequence of the impact anticipated in the shortened time-interval remaining before impact, exceeding the ADS design specifications for braking, and thus not enacted; after this self-imposed one second delay, an auditory alert was sounded (p. 12). For almost 20 minutes before impact, the HMI presented no requests for its human operator’s input (p. 13), likely contributing to the human operator’s sense of complacency.

Conclusions The following lessons can be taken from this case study:

The operator was distracted by their personal cell phone; the pedestrian’s blood indicated that they were impaired from drugs and that they violated Arizona State’s policy by jaywalking.

The indecisiveness of the ADS was partly attributed to the pedestrian not being in a crosswalk, a feature the system was not designed to address (p. 12), since corrected.

Uber had inadequate safety risk assessments of its procedures, ineffective oversight in real-time of its vehicle operators to determine whether they were being complacent and exhibited overall an inadequate safety culture (p. vi; see also NTSB, 2019b).

The Uber ADS was functionally limited, unable to correctly classify the object as a pedestrian, to predict their path, or to adequately assess its risk until almost impact.

The ADS’s decision to suppress action for one second to avoid false alarms increased the risk of driving on the roads and prevented the brakes from being applied immediately to avoid a hazardous situation.

By disconnecting the Volvo car’s own safety systems, Uber increased risk by eliminating the redundant safety systems for its ADS, since corrected (p. vii).



According to NTSB’s decision, although the National Highway Traffic Safety Administration (NHTSA) had published a third version of its automated vehicles policy, NHTSA provided no means to a self-driving company of evaluating its vehicle’s ADS to meet national or State safety regulations, or to provide a company with the detailed guidance to design an adequate ADS to operate safely. NTSB recommended that safety assessment reports submitted to NHTSA, voluntary at the time of NTSB’s final report, be made mandatory (p. viii) and uniform across all states (e.g., Arizona had taken no action by the time of NTSB’s final report).

At its most basic level, this case study explores the fundamental tool of debate used for eons by autonomous humans confronting uncertainty. It concludes that machines using artificial intelligence (AI) to operate as members of a team must be able to tell its human partners whenever the machines perceive a change in the context that affects their team’s performance; in turn, AI machines must be able to understand humans conversing with them, their interactions indicating the team’s intelligence (Cooke, 2020). Moreover, as part of a team, once these AI governed machines learn what humans want them to learn, they will know when the human members of their team are either complacent or malicious in the human’s performance of their roles (Lawless, et al., 2017), a capability not yet available in real time, but possibly over the next five years (Sofge, et al., 2019).

From a human-machine team’s perspective, the Uber car was a poor team player (Lawless, 2019). Human teams are autonomous. The operator and vehicle operated independently of each other. Facing uncertain situations, the NTSB report confirmed that no single human or machine agent can determine context alone. Resolving uncertainty requires at a minimum a state of shared interdependence to build context, to adapt to rapid changes in context, and, overall, to operate safely and ethically autonomous human-machine systems. We also know from Cummings (2015) that the best science teams are fully interdependent. Cooke (2020) locates a team’s intelligence in the interdependent interactions among its teammates. And to reduce uncertainty in an autonomous system necessitates that human and machine teammates are able to explain to each other, however imperfectly, their view of reality in causal terms (Pearl, 2002; Pearl and Mackenzie, 2018).

As SE moves into the future with the design and operation of autonomous human-machine teams and systems, an interdependence among the parts of a team not only makes the parts reactive to the presence of each other, but it also allows for the team to emerge as a single unit, increasing the team’s performance. SE practitioners must be cognizant of the benefits and downfalls of AI and autonomy.
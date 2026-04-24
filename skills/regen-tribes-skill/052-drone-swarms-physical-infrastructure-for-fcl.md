# Drone Swarms Physical Infrastructure For Fcl

An autonomous aerial vehicle carries LEDs.
It forms shapes in the sky.
Together they form a formation.
A formation sends a message.
The message is the shape.
Formation Coding Language defines how shapes encode meaning.
The swarm is the hardware layer of FCL.

AAVs do more than display shapes.
AAVs build things.
AAVs repair things.
AAVs seed forests. AAVs clean water. AAVs install solar panels.

Aerial additive manufacturing appeared in Nature in 2022.
Zhang et al. Imperial College London. Empa Switzerland.
BuilDrones print material. ScanDrones map the structure.
They work together.
The demonstration produced a 2.05 meter cylinder.
28 layers. 2 hours 13 minutes. No ground infrastructure.

Swarm construction from insects appeared in Science in 2014.
Werfel. Petersen. Nagpal. Termite-inspired robot teams.
Each robot follows simple local rules.
Complex global structure emerges.
No central planner. No single point of failure. Scales linearly.

These papers establish prior art.
Every patent on swarm construction after 2014 is invalid.

Scale 1 is shelter. 10 to 100 vehicles.
Print area 10 to 100 square meters.
Capitalism prices this at what a skilled team earns in three to six months.
The community builds it for the effort of one season of coordinated work.
Use: emergency shelter. Water filters. Storage.

Scale 2 is community. 100 to 1,000 vehicles.
Print area 100 to 1,000 square meters.
Capitalism prices this at what a neighborhood earns in one to two years.
The community builds it for the effort of one year of coordinated work.
Use: community halls. Irrigation structures. Retaining walls.

Scale 3 is infrastructure. 1,000 to 10,000 vehicles.
Print area 1,000 to 10,000 square meters.
Capitalism prices this at what a town earns in three to five years.
The community builds it for the effort of multiple seasons of coordinated work.
Use: dams. Flood defenses. Road surfaces. Bridge components.

Scale determines vehicle count. Scale determines payload.
Scale determines material type. Scale determines coordination complexity.

Each vehicle has eight components.

The frame provides structure. Carbon fiber or aluminum.
Weight target under 5kg. Strength to weight ratio drives material choice.

System (metaphor for an integrated whole or network):

The propulsion system has six rotors. Hexacopter layout.
Redundant if one motor fails. Current draw drives battery choice.
Battery provides 10 to 20 minutes flight time.

The flight controller runs stabilization.
It receives position commands. It adjusts motor speeds.
Capitalism prices a commercial flight controller at what one person earns in one week of precision technical work.
The community programs an open-source controller for the effort of several days of configuration.

The communication module receives formation commands.
Capitalism prices this at what one person earns in several days of technical work.
Range 500 meters to 2 kilometers. Mesh networking allows multi-hop.
Commands propagate through the swarm.

The material delivery system varies by use.
For FCL display: LED array only.
For construction: pump. Hose. Nozzle.
Pump pressure must overcome head height. Nozzle diameter sets layer resolution.

The perception system has cameras.
Downward-facing for position hold. Forward-facing for obstacle detection.
RGBD cameras map environment in 3D. Lidar adds range accuracy.
Capitalism prices this at what one person earns in one to four weeks of technical work.

The power system is battery. Lithium polymer.
4S to 6S configuration. 20 to 50 minutes hover time.
Fast swap reduces downtime.

The safety system has three layers.
Geofencing prevents leaving the zone.
Return-to-home activates on signal loss.
Battery monitoring triggers landing at low charge.

The ground station has four components.

The computer runs the coordination software.
It runs the FCL encoder. It assigns positions to each vehicle.
It monitors vehicle health.
Capitalism prices a workstation at what one person earns in two to six weeks of technical work.
A Raspberry Pi handles 100 vehicles. A workstation handles 1,000.

The radio links the computer to vehicles.
Two-way communication. Updates at 10 to 50 Hz.
Capitalism prices a long-range radio system at what one person earns in two to twelve weeks of technical work.

The RTK base station provides centimeter precision.
RTK stands for Real-Time Kinematic.
It corrects GPS drift. Accuracy 1 to 2 centimeters horizontal.
Capitalism prices this at what one person earns in two to four weeks of precision technical work.
Coverage radius 5 kilometers.

The power system runs the ground station.
Solar panels charge batteries. 48-volt system.
Uninterrupted operation.

AAVs print two material classes.

Class 1 is foam. Polyurethane foam.
Two-component mix at nozzle. Expands on contact. Cures in 60 seconds.
Use: insulation. Floating structures. Formwork.

Class 2 is cement. Portland cement with additives.
Microbial cement. Geopolymer from volcanic ash.
Each has different working time. Each has different strength.
Choice depends on structure requirements.

Capitalism prices construction material at what a team earns in several days of technical work per cubic meter.
Transport cost is zero. AAVs deliver directly to print location.

Layer 1 is mission planning. Define target shape. Print path. Material volume. Layer height.
Output: sequence of positions and material commands.

Layer 2 is task allocation.
Assign positions to vehicles. Minimize travel distance. Balance workload.
Handle vehicle failure. Reassign tasks when vehicles drop out.

Layer 3 is trajectory generation.
Compute smooth paths. Account for obstacles. Wind. Vehicle dynamics.
Output: time-parameterized trajectories.

Layer 4 is real-time control.
Run on each vehicle. Track position. Adjust motor speeds.
Maintain formation. Respond to disturbances.

Layer 5 is monitoring. Track all vehicles. Log all positions.
Log all material deposits. Detect anomalies. Alert operators.

Open source tools cover most layers.
ROS2 provides robot coordination. MoveIt provides motion planning.
QGroundControl provides mission management. Gazebo provides simulation.
Capitalism charges for proprietary software. The community uses free software.

Fractal manufacturing means the factory builds the next factory.
Vehicles print vehicle components.
Fabrication AAVs print plastic parts. Metal AAVs print metal parts.
Bolts and connectors come from the printer. Circuit boards come from a PCB mill.

The second-generation swarm builds the third-generation swarm.
No external manufacturing required.
Cost approaches material cost only. Only raw material and energy constrain growth.

Two becomes four. Four becomes eight. Growth is exponential.
This is the dark factory concept. Money becomes irrelevant.

Construction is the primary use.
Emergency shelter deploys in 48 hours. No roads. No ground equipment.
Vehicles fly over debris. Print shelter on-site from local material.

Water filters print from porous geopolymer.
The structure filters pathogens. The structure provides housing.

Irrigation structures print from geopolymer.
Check dams. Terraces. Channels.

Flood defenses print from geopolymer or soil.
Sandbag-like structures. Stack by swarm. Absorb flood energy.

Agriculture is the second use.
Pollination AAVs carry pollen. Supplement natural pollination.
Soil scanning AAVs map nutrients. Moisture. Compaction.
Pest management AAVs apply targeted treatments. Reduce chemical use 90 percent.
Seed deployment AAVs plant in difficult terrain. Cost drops 80 percent.

Maintenance is the third use.
Power line inspection AAVs carry thermal cameras.
Detect hotspots. Vegetation encroachment. Physical damage.
Reduce inspection cost 90 percent.

Solar panel cleaning AAVs carry brushes.
Dust reduces output 30 percent. Cleaning restores full output.
Frequency weekly in desert regions.

Capitalism prices a Class 1 vehicle at what one skilled person earns in one to four weeks of technical work.
Capitalism prices a Class 2 vehicle at what one skilled person earns in one to three months of technical work.
Capitalism prices a Class 3 vehicle at what one skilled person earns in three to nine months of technical work.
The community builds each for a fraction of that effort.

Capitalism prices ground infrastructure at what a technical team earns in one to four months of work.
Radio systems. Computing hardware. RTK base stations. Power systems.
The community sources these through cooperatives or builds them from components.

Capitalism charges licensing fees for proprietary software.
The community uses open source. Cost is the effort of configuration and learning.

Capitalism prices Class 1 material at what one person earns in several days of technical work per cubic meter.
Capitalism prices Class 2 material at what one person earns in one to two weeks of technical work per cubic meter.
The community produces material from local resources. Cost is extraction and processing.

Capitalism prices a full Class 1 system at what a neighborhood earns in three to six months of collective labor.
Capitalism prices a full Class 2 system at what a neighborhood earns in one to two years of collective labor.
Capitalism prices a full Class 3 system at what a town earns in three to five years of collective labor.
The community builds each for the effort of one season to one year of coordinated work.

Tier 1 is proof of concept. Month 1 to 3.
10 vehicles. FCL display only.
Capitalism prices this at what a small team earns in two to four weeks.
The community builds it for the effort of one month of focused work.

Tier 2 is pilot construction. Month 4 to 9.
50 vehicles. Shelter printing.
Capitalism prices this at what a neighborhood earns in three to six months.
The community builds it for the effort of one season of coordinated work.

Tier 3 is operational system. Month 10 to 18.
200 vehicles. Community infrastructure.
Capitalism prices this at what a neighborhood earns in one to two years.
The community builds it for the effort of one year of coordinated work.

Tier 4 is scale system. Month 19 to 36.
1,000 vehicles. Infrastructure projects.
Capitalism prices this at what a town earns in three to five years.
The community builds it for the effort of multiple seasons of coordinated work.

050 020 000


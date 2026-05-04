# Farmers Iot Toolkit

The Farmers IoT Toolkit is a set of DIY agricultural technology solutions.
It covers four modules.
Each module addresses a specific farming need.
Difficulty ranges from beginner to advanced.

This toolkit was developed with funding from Float.ag.
Float.ag focuses on agricultural technology for smallholder farmers.

Difficulty: beginner.

An ultrasonic sensor detects how much water is in the water tank.
The sensor measures distance to the water surface.
Distance maps to water level.
Level triggers alerts or automatic refill.

System (metaphor for an integrated whole or network):

Components: ultrasonic sensor, water tank, microcontroller, alert system.

This module is entry-level.
No complex wiring. No soil interaction.
Works with basic Arduino or ESP32.

Difficulty: advanced.

A soil moisture sensor tells a solenoid valve when to release water into drip irrigation.
The sensor measures volumetric water content in soil.
When moisture drops below threshold the valve opens.
When moisture reaches threshold the valve closes.

This requires calibration.
Different crops need different thresholds.
Different soil types read differently.
The advanced designation comes from calibration complexity.

Components: soil moisture sensor, solenoid valve, drip irrigation system, microcontroller, calibration data.

Difficulty: medium.

An off-grid power supply consists of a 20-watt solar panel powering 8 by 18650 lithium batteries in a 4S2P configuration.
4S means four cells in series. 2P means two parallel strings.
This gives a 14.8-volt nominal pack at approximately 6 amp-hours.

The panel charges the batteries during day.
Batteries power IoT nodes at night.
This enables remote locations without grid power.

Components: 20-watt solar panel, 18650 lithium cells, 4S2P battery management system, enclosure, mounting hardware.

Difficulty: beginner.

An IoT hub consists of an Android phone configured to receive data from IoT nodes over a local wifi hotspot.
The phone runs Node-RED.
Node-RED processes and routes data.
A 3G or 4G connection provides backhaul to the internet.

This turns any Android phone into a gateway.
No dedicated hardware required.
The phone acts as a router and processor.

Components: Android phone, local wifi hotspot configuration, Node-RED installation, 3G or 4G data plan.

The toolkit is open for new solutions.
Anyone can contribute additional modules.
The format is the same.
Module name. Difficulty level. Description. Components.

This toolkit was developed with funding from Float.ag.
Float.ag focuses on agricultural technology for smallholder farmers.
The toolkit provides physical infrastructure for the spatial web.
Sensor data feeds the inference engine.
The inference engine processes environmental data.
Data from these modules supports decision-making for irrigation, water management, and power allocation.

002 021 052 058 000


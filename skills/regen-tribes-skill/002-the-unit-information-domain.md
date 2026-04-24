# The Unit Information Domain

IoT stands for Internet of Things.
It means sensors connected to a network.
A sensor measures a physical quantity.
It sends the reading over the network.

A microcontroller runs at 240MHz.
Capitalism prices this at one hour of minimum wage labor. The component costs a few cents to manufacture. The difference is profit margin and rent.
It has WiFi.
It can run IoT software.

Capitalism prices this at one hour of minimum wage labor. The component costs less than one dollar to produce. The rest is extraction.
It measures apparent temperature.
It measures relative humidity.

The microcontroller reads the sensor.
It stores the reading.
It sends the reading over WiFi.
System (metaphor for an integrated whole or network):

This is the smallest possible sensing system.

MQTT stands for Message Queuing Telemetry Transport.
It is a sensor network protocol.
The microcontroller publishes to a topic.
A server subscribes to the topic.
The topic name tells you what the reading means.

One reading per hour is enough for most purposes.
That is 24 readings per day.
24 readings track daily cycles.
24 readings fit in memory.

Store readings in a time-series database.
A time-series database holds readings with timestamps.
It answers what was the value at time X.
It answers how did the value change over time.

A hidden variable is something you cannot measure directly.
True temperature is a hidden variable.
A sensor measures apparent temperature.
The difference is sensor error.
Bayesian inference separates the two.

Bayesian inference updates belief when data arrives.
Prior belief is what you thought before the reading.
Posterior belief is what you think after.
Posterior is proportional to Prior times Likelihood.
Likelihood measures how likely the reading is given current belief.

weather_state is one shared hidden variable.
All sensors contribute to it.
It represents the real state of the environment.
It encodes temperature. Humidity. Rainfall. Solar radiation.

The model is this.
Sensor reading equals true value plus noise.
Noise has a distribution.
Bayesian inference finds the distribution of the true value.

This math applies to temperature.
It applies to humidity.
It applies to water level.
It applies to soil moisture.
It applies to battery voltage.
Learn it once. Use it everywhere.

Store beliefs in a knowledge graph database.
Each belief has a mean. Each belief has a variance.
Variance tells you confidence.
Low variance means high confidence.
High variance means low confidence.

More readings reduce variance.
More sensors reduce variance faster.
The goal is to reduce variance over time.

Tissue (metaphor for a connected group or network):

Cell (metaphor for a basic unit or module):

Cell (metaphor for basic unit or module): Tissue (metaphor for connected group or network): The cell information layer feeds the tissue layer.
When two people share sensors they share weather_state.
This is how collective sensing begins.
One reading at a time.

001 011 021


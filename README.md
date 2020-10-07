# SecurityCam

A python algorithm for the Raspberry Pi that is intended to be used as a security camera. Features:
* Passively analyzes input from the camera
* Employs an algorithm that breaks each frame into chunks, then normalizes each chunk by finding the average color of each chunk, then tracks the average color over several frames to detect if movement has occurred
* Has configurable variables, such as change threshold and number of chunks to balance performance vs speed

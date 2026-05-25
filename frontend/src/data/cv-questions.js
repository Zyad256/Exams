export const examData = [
  {
    "examId": 0,
    "title": "Foundations & Pixels",
    "questions": [
      {
        "number": 1,
        "question": "In the Human Vision System (HVS), which photoreceptor cells are responsible for color vision?",
        "options": [
          {
            "letter": "A",
            "text": "Rods"
          },
          {
            "letter": "B",
            "text": "Cones"
          },
          {
            "letter": "C",
            "text": "Cornea"
          },
          {
            "letter": "D",
            "text": "Retina"
          }
        ],
        "answer": "B",
        "explanation": "Cones function best in bright light and are responsible for color vision."
      },
      {
        "number": 2,
        "question": "Which theory of color vision proposes separate opponent color channels exist in the retina?",
        "options": [
          {
            "letter": "A",
            "text": "Young & Helmholtz trichromatic theory"
          },
          {
            "letter": "B",
            "text": "Herings opponent color theory"
          },
          {
            "letter": "C",
            "text": "Retinex theory"
          },
          {
            "letter": "D",
            "text": "Gestalt theory"
          }
        ],
        "answer": "B",
        "explanation": "Herings opponent color theory suggests channels for red vs. green, yellow vs. blue, and black vs. white."
      },
      {
        "number": 3,
        "question": "What is the main advantage of image representation by means of quadtrees?",
        "options": [
          {
            "letter": "A",
            "text": "Independence from object orientation"
          },
          {
            "letter": "B",
            "text": "Simple algorithms for addition of images and computing areas"
          },
          {
            "letter": "C",
            "text": "Perfect noise immunity"
          },
          {
            "letter": "D",
            "text": "It stores every pixel redundantly"
          }
        ],
        "answer": "B",
        "explanation": "Quadtrees provide simple algorithms for addition of images, computing object areas, and statistical moments."
      },
      {
        "number": 4,
        "question": "What does the Manhattan distance (L1 Norm) between points p(x1,y1) and q(x2,y2) calculate?",
        "options": [
          {
            "letter": "A",
            "text": "max(|x1-x2|, |y1-y2|)"
          },
          {
            "letter": "B",
            "text": "|x1-x2| + |y1-y2|"
          },
          {
            "letter": "C",
            "text": "sqrt((x1-x2)^2 + (y1-y2)^2)"
          },
          {
            "letter": "D",
            "text": "|x1-x2| * |y1-y2|"
          }
        ],
        "answer": "B",
        "explanation": "The Manhattan distance is D4 = |x1-x2| + |y1-y2|."
      },
      {
        "number": 5,
        "question": "What is the primary purpose of Histogram Equalization?",
        "options": [
          {
            "letter": "A",
            "text": "To detect edges in an image"
          },
          {
            "letter": "B",
            "text": "To remove high-frequency noise"
          },
          {
            "letter": "C",
            "text": "To distribute intensity values evenly, improving global contrast"
          },
          {
            "letter": "D",
            "text": "To convert an RGB image to grayscale"
          }
        ],
        "answer": "C",
        "explanation": "Histogram equalization flattens the histogram to improve global contrast."
      },
      {
        "number": 6,
        "question": "Which of the following is true regarding 4-adjacency?",
        "options": [
          {
            "letter": "A",
            "text": "Two pixels are 4-adjacent if they share only a corner."
          },
          {
            "letter": "B",
            "text": "Two pixels are 4-adjacent if their City Block distance D4(p,q) = 1."
          },
          {
            "letter": "C",
            "text": "Two pixels are 4-adjacent if their Chessboard distance D8(p,q) = 1."
          },
          {
            "letter": "D",
            "text": "Two pixels are 4-adjacent if they are located diagonally from each other."
          }
        ],
        "answer": "B",
        "explanation": "4-adjacency strictly requires pixels to be immediately adjacent horizontally or vertically."
      },
      {
        "number": 7,
        "question": "What is the role of the pupil in the Human Vision System?",
        "options": [
          {
            "letter": "A",
            "text": "To interpret colors"
          },
          {
            "letter": "B",
            "text": "To refract light onto the retina"
          },
          {
            "letter": "C",
            "text": "To control the amount of light entering the eye"
          },
          {
            "letter": "D",
            "text": "To transmit electrical signals to the brain"
          }
        ],
        "answer": "C",
        "explanation": "The pupil constricts in bright light and dilates in dim light to regulate light intake."
      },
      {
        "number": 8,
        "question": "When calculating a Distance Transform, what does the resulting image represent?",
        "options": [
          {
            "letter": "A",
            "text": "The Fourier transform frequencies"
          },
          {
            "letter": "B",
            "text": "The distance of each background pixel from the nearest foreground subset pixel"
          },
          {
            "letter": "C",
            "text": "A binary image representing edges"
          },
          {
            "letter": "D",
            "text": "A histogram equalization matrix"
          }
        ],
        "answer": "B",
        "explanation": "The Distance Transform assigns to each pixel the distance to the nearest foreground element."
      },
      {
        "number": 9,
        "question": "Which color blindness type is characterized by the absence of the mid-wave sensitive (green) cone?",
        "options": [
          {
            "letter": "A",
            "text": "Protanopic"
          },
          {
            "letter": "B",
            "text": "Deuteranopic"
          },
          {
            "letter": "C",
            "text": "Tritanopic"
          },
          {
            "letter": "D",
            "text": "Achromatic"
          }
        ],
        "answer": "B",
        "explanation": "Deuteranopic occurs when the mid-wave sensitive cone is missing."
      },
      {
        "number": 10,
        "question": "Which Gestalt principle implies that elements moving in the same direction are perceived as a group?",
        "options": [
          {
            "letter": "A",
            "text": "Law of Similarity"
          },
          {
            "letter": "B",
            "text": "Law of Continuity"
          },
          {
            "letter": "C",
            "text": "Law of Common Fate"
          },
          {
            "letter": "D",
            "text": "Law of Symmetry"
          }
        ],
        "answer": "C",
        "explanation": "The Law of Common Fate groups objects moving in the same direction together."
      },
      {
        "number": 11,
        "question": "What is a crack edge?",
        "options": [
          {
            "letter": "A",
            "text": "An edge with multiple broken pixels"
          },
          {
            "letter": "B",
            "text": "An edge assigned to the space between 4-neighbors when there is a brightness difference"
          },
          {
            "letter": "C",
            "text": "An artifact left by poor JPEG compression"
          },
          {
            "letter": "D",
            "text": "An imaginary line connecting the convex hull"
          }
        ],
        "answer": "B",
        "explanation": "A crack edge exists implicitly between pairs of 4-connected pixels possessing differing properties."
      },
      {
        "number": 12,
        "question": "What is the purpose of image solarization?",
        "options": [
          {
            "letter": "A",
            "text": "Removing all colors"
          },
          {
            "letter": "B",
            "text": "Complementing only part of the image intensity scale"
          },
          {
            "letter": "C",
            "text": "Blurring the background"
          },
          {
            "letter": "D",
            "text": "Changing the lighting angle"
          }
        ],
        "answer": "B",
        "explanation": "Solarization entails complementing certain intensity ranges while leaving others intact."
      },
      {
        "number": 13,
        "question": "In Mathematical Morphology, what operation translates a Structuring Element over a binary image to fill small holes and connect nearby regions?",
        "options": [
          {
            "letter": "A",
            "text": "Erosion"
          },
          {
            "letter": "B",
            "text": "Dilation"
          },
          {
            "letter": "C",
            "text": "Opening"
          },
          {
            "letter": "D",
            "text": "Closing"
          }
        ],
        "answer": "D",
        "explanation": "Filling holes and connecting regions is Closing."
      },
      {
        "number": 14,
        "question": "What morphological operation is defined as Erosion followed by Dilation?",
        "options": [
          {
            "letter": "A",
            "text": "Opening"
          },
          {
            "letter": "B",
            "text": "Closing"
          },
          {
            "letter": "C",
            "text": "Skeletonization"
          },
          {
            "letter": "D",
            "text": "Translation"
          }
        ],
        "answer": "A",
        "explanation": "Opening removes thin lines and isolated noise points."
      },
      {
        "number": 15,
        "question": "What happens when you subtract a constant from each pixel in an image?",
        "options": [
          {
            "letter": "A",
            "text": "Image becomes redder"
          },
          {
            "letter": "B",
            "text": "Image contrast increases"
          },
          {
            "letter": "C",
            "text": "Image brightness decreases"
          },
          {
            "letter": "D",
            "text": "Image becomes inverted"
          }
        ],
        "answer": "C",
        "explanation": "Subtracting a constant shifts the histogram to the left, making the overall image darker."
      }
    ]
  },
  {
    "examId": 1,
    "title": "Exam 2: Edges & Hough Transform",
    "questions": [
      {
        "number": 1,
        "question": "Which filter is typically used in the first stage of the Canny Edge Detector?",
        "options": [
          {
            "letter": "A",
            "text": "Median filter"
          },
          {
            "letter": "B",
            "text": "Roberts filter"
          },
          {
            "letter": "C",
            "text": "Gaussian filter"
          },
          {
            "letter": "D",
            "text": "Unsharp Mask"
          }
        ],
        "answer": "C",
        "explanation": "Canny requires Gaussian smoothing before calculating gradients."
      },
      {
        "number": 2,
        "question": "In the Hough Transform with polar coordinates, an edge point (x_i, y_i) maps to what shape in Hough space?",
        "options": [
          {
            "letter": "A",
            "text": "A Line"
          },
          {
            "letter": "B",
            "text": "A single Cell"
          },
          {
            "letter": "C",
            "text": "A Sinusoid"
          },
          {
            "letter": "D",
            "text": "A Hyperbola"
          }
        ],
        "answer": "C",
        "explanation": "An edge point in image space translates to a sinusoidal curve in Hough Space."
      },
      {
        "number": 3,
        "question": "Why is the standard line equation y = mx + c problematic for Hough Transforms?",
        "options": [
          {
            "letter": "A",
            "text": "It uses 3D parameter space"
          },
          {
            "letter": "B",
            "text": "The slope (m) approaches infinity for vertical lines"
          },
          {
            "letter": "C",
            "text": "It is computationally slow"
          },
          {
            "letter": "D",
            "text": "It suppresses all non-maximal edges"
          }
        ],
        "answer": "B",
        "explanation": "Vertical lines cause m to approach infinity, requiring unbounded parameter space. Polar coordinates fix this."
      },
      {
        "number": 4,
        "question": "What is the primary function of Non-Maximal Suppression in edge detection?",
        "options": [
          {
            "letter": "A",
            "text": "To extract regions smoothly"
          },
          {
            "letter": "B",
            "text": "To remove impulse noise"
          },
          {
            "letter": "C",
            "text": "To thin edges to a single pixel width"
          },
          {
            "letter": "D",
            "text": "To increase global contrast"
          }
        ],
        "answer": "C",
        "explanation": "Non-Maximal Suppression discards pixels that are not the local maximum strictly along the gradient direction."
      },
      {
        "number": 5,
        "question": "Which second-derivative operator is highly sensitive to noise and thus usually paired with a Gaussian?",
        "options": [
          {
            "letter": "A",
            "text": "Prewitt"
          },
          {
            "letter": "B",
            "text": "Sobel"
          },
          {
            "letter": "C",
            "text": "Laplacian"
          },
          {
            "letter": "D",
            "text": "Hough"
          }
        ],
        "answer": "C",
        "explanation": "Because the Laplacian involves the second derivative, it amplifies high frequency noise, which is mitigated by preceding it with a Gaussian blur (LoG)."
      },
      {
        "number": 6,
        "question": "Which 3x3 operator is designed specifically to detect horizontal changes (i.e. vertical edges) by approximating a gradient?",
        "options": [
          {
            "letter": "A",
            "text": "[-1 0 1; -2 0 2; -1 0 1]"
          },
          {
            "letter": "B",
            "text": "[1 1 1; 1 1 1; 1 1 1]"
          },
          {
            "letter": "C",
            "text": "[0 1 0; 1 -4 1; 0 1 0]"
          },
          {
            "letter": "D",
            "text": "[1 2 1; 0 0 0; -1 -2 -1]"
          }
        ],
        "answer": "A",
        "explanation": "This is the vertical Sobel operator matrix. It computes the rate of change along the x-axis."
      },
      {
        "number": 7,
        "question": "High-boost filtering achieves what effect?",
        "options": [
          {
            "letter": "A",
            "text": "Enhances high frequencies while preserving low frequencies"
          },
          {
            "letter": "B",
            "text": "Removes all low frequencies"
          },
          {
            "letter": "C",
            "text": "Translates the image circularly"
          },
          {
            "letter": "D",
            "text": "Creates a binary image from thresholds"
          }
        ],
        "answer": "A",
        "explanation": "It sharpens edges by adding high-frequency details back onto the image while maintaining general tone."
      },
      {
        "number": 8,
        "question": "In Canny edge tracking by hysteresis, what happens to a pixel whose gradient magnitude lies exactly between T_low and T_high?",
        "options": [
          {
            "letter": "A",
            "text": "It is discarded"
          },
          {
            "letter": "B",
            "text": "It is made a strong edge unconditionally"
          },
          {
            "letter": "C",
            "text": "It is marked as a strong edge ONLY if connected to an existing strong edge"
          },
          {
            "letter": "D",
            "text": "It is reassigned a value of 0"
          }
        ],
        "answer": "C",
        "explanation": "Hysteresis uses dual thresholds; weak edges between them are preserved only if contiguous with strong reliable edges."
      },
      {
        "number": 9,
        "question": "For the Generalized Hough Transform detecting arbitrary shapes, what data structure replaces parametric equations?",
        "options": [
          {
            "letter": "A",
            "text": "A kd-tree"
          },
          {
            "letter": "B",
            "text": "An R-table indexed by boundary gradient angles"
          },
          {
            "letter": "C",
            "text": "A sparse 5-dimensional Gaussian matrix"
          },
          {
            "letter": "D",
            "text": "A Markov decision process"
          }
        ],
        "answer": "B",
        "explanation": "The R-table maps boundary gradient orientations to displacement vectors measuring distance to the shape center."
      },
      {
        "number": 10,
        "question": "If 3 collinear points (1,1), (2,2), (3,3) are mapped to Cartesian (m,c) Hough space, what happens?",
        "options": [
          {
            "letter": "A",
            "text": "They form 3 separate parallel lines"
          },
          {
            "letter": "B",
            "text": "They intersect at one specific point (m=1, c=0)"
          },
          {
            "letter": "C",
            "text": "They do not intersect"
          },
          {
            "letter": "D",
            "text": "They form a generalized sinusoid"
          }
        ],
        "answer": "B",
        "explanation": "Collinear points trace intersecting lines in parameter space. Since they define y=1x+0, the lines intersect at m=1, c=0."
      },
      {
        "number": 11,
        "question": "When finding circles with an UNKNOWN radius using Hough Transform, how many dimensions does the accumulator array need?",
        "options": [
          {
            "letter": "A",
            "text": "1D"
          },
          {
            "letter": "B",
            "text": "2D"
          },
          {
            "letter": "C",
            "text": "3D"
          },
          {
            "letter": "D",
            "text": "4D"
          }
        ],
        "answer": "C",
        "explanation": "The parameters are (a, b) for the center and (r) for the radius, creating a 3D accumulator."
      },
      {
        "number": 12,
        "question": "In Median Filtering, what image attribute is notoriously damaged or smoothed out?",
        "options": [
          {
            "letter": "A",
            "text": "Salt-and-Pepper noise"
          },
          {
            "letter": "B",
            "text": "Large homogenous colors"
          },
          {
            "letter": "C",
            "text": "Sky gradients"
          },
          {
            "letter": "D",
            "text": "Thin lines and sharp corners"
          }
        ],
        "answer": "D",
        "explanation": "Median filtering can aggressively eliminate fine details like thin lines because they constitute a minority of the sliding window."
      },
      {
        "number": 13,
        "question": "What is Unsharp Masking?",
        "options": [
          {
            "letter": "A",
            "text": "Subtracting a blurred version of an image from itself to extract high-frequency detail"
          },
          {
            "letter": "B",
            "text": "Blending two separate images together"
          },
          {
            "letter": "C",
            "text": "Detecting edges using a thresholding operation"
          },
          {
            "letter": "D",
            "text": "Compressing the image histogram"
          }
        ],
        "answer": "A",
        "explanation": "The resulting high-frequency signal can then be added back to the original to sharpen it."
      },
      {
        "number": 14,
        "question": "Averaging using a Rotating Mask is an algorithm primarily designed to do what?",
        "options": [
          {
            "letter": "A",
            "text": "Convert color to grayscale"
          },
          {
            "letter": "B",
            "text": "Translate objects randomly"
          },
          {
            "letter": "C",
            "text": "Smooth an image WITHOUT blurring sharp edges"
          },
          {
            "letter": "D",
            "text": "Detect circles purely in binary images"
          }
        ],
        "answer": "C",
        "explanation": "By evaluating variance in shifting sub-masks and selecting the one with lowest variance, it smooths homogenous regions while ignoring the edge side."
      },
      {
        "number": 15,
        "question": "Why are edges defined as perpendicular to the image gradient?",
        "options": [
          {
            "letter": "A",
            "text": "Because the gradient always points down"
          },
          {
            "letter": "B",
            "text": "Because the gradient points in the direction of the FASTEST intensity change"
          },
          {
            "letter": "C",
            "text": "Because it simplifies coordinate transformation"
          },
          {
            "letter": "D",
            "text": "Because gradients only exist at 90-degree intervals"
          }
        ],
        "answer": "B",
        "explanation": "An edge represents the boundary. The gradient points perpendicular to that boundary, directly up the slope of intensity change."
      }
    ]
  },
  {
    "examId": 2,
    "title": "Exam 3: Corners, Blobs, & SIFT",
    "questions": [
      {
        "number": 1,
        "question": "In the Harris Corner Detector structure tensor (M), what do eigenvalues λ1 and λ2 signify?",
        "options": [
          {
            "letter": "A",
            "text": "Color saturation ratios"
          },
          {
            "letter": "B",
            "text": "Principal curvatures representing rate of intensity change in independent directions"
          },
          {
            "letter": "C",
            "text": "Blob scale dimensions"
          },
          {
            "letter": "D",
            "text": "Fourier phase constants"
          }
        ],
        "answer": "B",
        "explanation": "The eigenvalues denote the maximum and minimum rates of intensity variance within the specified local window."
      },
      {
        "number": 2,
        "question": "When using the Harris response function R = det(M) - k(trace(M))^2, how is a true corner identified?",
        "options": [
          {
            "letter": "A",
            "text": "R is negative"
          },
          {
            "letter": "B",
            "text": "R is precisely zero"
          },
          {
            "letter": "C",
            "text": "R is large and positive"
          },
          {
            "letter": "D",
            "text": "λ1 >> λ2"
          }
        ],
        "answer": "C",
        "explanation": "A large positive R indicates that both eigenvalues are large (significant change in all directions), marking it as a corner."
      },
      {
        "number": 3,
        "question": "Why are corners typically better than straight edges for feature matching/tracking?",
        "options": [
          {
            "letter": "A",
            "text": "Because corners are purely monochromatic"
          },
          {
            "letter": "B",
            "text": "Because shifting the patch in ANY direction results in high variance, avoiding the aperture problem"
          },
          {
            "letter": "C",
            "text": "Because matrices for corners are 1-dimensional"
          },
          {
            "letter": "D",
            "text": "Because flat regions cause division by zero"
          }
        ],
        "answer": "B",
        "explanation": "A straight edge only changes perpendicularly; moving parallel to the edge yields no change, causing ambiguity (aperture problem). Corners change in all directions."
      },
      {
        "number": 4,
        "question": "Which statement is TRUE about the Harris detectors invariance properties?",
        "options": [
          {
            "letter": "A",
            "text": "It is fully scale-invariant"
          },
          {
            "letter": "B",
            "text": "It is highly rotation-invariant but fails on severe scale shifts"
          },
          {
            "letter": "C",
            "text": "It is invariant to extreme geometric perspective projection"
          },
          {
            "letter": "D",
            "text": "It requires an RGB image, making it color-dependent"
          }
        ],
        "answer": "B",
        "explanation": "A sharp corner when magnified significantly will appear as a straight edge to a fixed-size window, breaking the cornerness metric."
      },
      {
        "number": 5,
        "question": "Difference of Gaussians (DoG) is used in SIFT to act as a highly efficient approximation of which operator?",
        "options": [
          {
            "letter": "A",
            "text": "Normalized Laplacian of Gaussian (NLoG)"
          },
          {
            "letter": "B",
            "text": "Canny Non-Maximal Suppression"
          },
          {
            "letter": "C",
            "text": "Prewitt X-Gradient"
          },
          {
            "letter": "D",
            "text": "Discrete Wavelet Transform"
          }
        ],
        "answer": "A",
        "explanation": "Subtracting two neighboring blurred images efficiently approximates the computationally heavy Laplacian of Gaussian for scale-space blob detection."
      },
      {
        "number": 6,
        "question": "In SIFT keypoint selection, what matrix is analyzed to filter out unstable edge-like responses?",
        "options": [
          {
            "letter": "A",
            "text": "The SIFT descriptor"
          },
          {
            "letter": "B",
            "text": "The Hessian matrix (Curvatures)"
          },
          {
            "letter": "C",
            "text": "The Roberts Operator"
          },
          {
            "letter": "D",
            "text": "The R-table"
          }
        ],
        "answer": "B",
        "explanation": "Like Harris, SIFT checks the principal curvatures using the trace and determinant of the Hessian matrix to reject points with high edge likeness."
      },
      {
        "number": 7,
        "question": "How is the final 128-dimensional SIFT descriptor vector constructed?",
        "options": [
          {
            "letter": "A",
            "text": "Concatenating 128 raw pixel brightness values"
          },
          {
            "letter": "B",
            "text": "Computing orientation histograms across 16 (4x4) subregions, each carrying 8 directional bins"
          },
          {
            "letter": "C",
            "text": "By applying a Fourier transform yielding 128 coefficients"
          },
          {
            "letter": "D",
            "text": "Extracting the 128 largest pixels in the image pyramid"
          }
        ],
        "answer": "B",
        "explanation": "A 16x16 pixel neighborhood is sectioned into a 4x4 grid of subregions. Each subregion maintains an 8-bin histogram of local gradient angles (16*8 = 128)."
      },
      {
        "number": 8,
        "question": "How does SIFT obtain achieving Rotation Invariance?",
        "options": [
          {
            "letter": "A",
            "text": "Using polar sinusoidal waves"
          },
          {
            "letter": "B",
            "text": "By finding the dominant peak in a histogram of gradient orientations and assigning it as a reference angle relative to the patch"
          },
          {
            "letter": "C",
            "text": "It calculates rotational matrices for every degree from 0 to 360"
          },
          {
            "letter": "D",
            "text": "By discarding all directional edge information"
          }
        ],
        "answer": "B",
        "explanation": "SIFT computes the most dominant orientation of the patch and defines its descriptor array geometry relative to this base angle."
      },
      {
        "number": 9,
        "question": "Which of the following best describes the multi-level architecture used in SIFT to search for features?",
        "options": [
          {
            "letter": "A",
            "text": "A single-scale Sobel sweep"
          },
          {
            "letter": "B",
            "text": "An Octave Pyramid where an image is increasingly blurred, DoGs evaluated, and then the image down-sampled for the next octave"
          },
          {
            "letter": "C",
            "text": "A sequence of median filters expanding endlessly"
          },
          {
            "letter": "D",
            "text": "An unsharp mask cascade"
          }
        ],
        "answer": "B",
        "explanation": "This creates the full scale-space where varying object sizes can be intercepted precisely."
      },
      {
        "number": 10,
        "question": "For a local extrema detection in a DoG pyramid, every target pixels value is compared against how many neighboring pixels (spatially and across scale)?",
        "options": [
          {
            "letter": "A",
            "text": "8"
          },
          {
            "letter": "B",
            "text": "9"
          },
          {
            "letter": "C",
            "text": "26"
          },
          {
            "letter": "D",
            "text": "128"
          }
        ],
        "answer": "C",
        "explanation": "It is compared to its 8 spatial neighbors on the same layer, 9 neighbors on the higher layer, and 9 neighbors on the lower layer (8 + 9 + 9 = 26)."
      },
      {
        "number": 11,
        "question": "In Harris corner detection, if λ1 >> λ2 (one eigenvalue is overwhelmingly greater than the other), what does the image patch resemble?",
        "options": [
          {
            "letter": "A",
            "text": "A corner"
          },
          {
            "letter": "B",
            "text": "A flat region"
          },
          {
            "letter": "C",
            "text": "An edge"
          },
          {
            "letter": "D",
            "text": "A noisy spike"
          }
        ],
        "answer": "C",
        "explanation": "When only one principal direction has significant intensity change, it represents an edge."
      },
      {
        "number": 12,
        "question": "What does SIFT explicitly use to determine a keypoint feature signature, ensuring robustness to illumination shifts?",
        "options": [
          {
            "letter": "A",
            "text": "Differences of raw color values"
          },
          {
            "letter": "B",
            "text": "Image Function Histograms based purely on gradients (derivatives)"
          },
          {
            "letter": "C",
            "text": "Haar-like binary patterns"
          },
          {
            "letter": "D",
            "text": "Machine learning based neural networks"
          }
        ],
        "answer": "B",
        "explanation": "Because SIFT focuses exclusively on derivatives/gradients, it possesses natural invariance to uniform intensity shifts (like lighting variations)."
      },
      {
        "number": 13,
        "question": "Why does SIFT perform a sub-pixel quadratic curve fit on candidates?",
        "options": [
          {
            "letter": "A",
            "text": "To discard flat features implicitly"
          },
          {
            "letter": "B",
            "text": "To refine point coordinates and interpolate scale positioning mathematically precisely"
          },
          {
            "letter": "C",
            "text": "To compress the image size by 1/4"
          },
          {
            "letter": "D",
            "text": "To adjust for color balancing"
          }
        ],
        "answer": "B",
        "explanation": "Raw DoG arrays only pinpoint features on discrete grids. Quadratic interpolation estimates the true peak across the geometric space and scale."
      },
      {
        "number": 14,
        "question": "If a local image patch possesses uniform intensity everywhere, what occurs within the Harris structure tensor matrix M?",
        "options": [
          {
            "letter": "A",
            "text": "It overflows"
          },
          {
            "letter": "B",
            "text": "Its determinant is extremely negative"
          },
          {
            "letter": "C",
            "text": "Both eigenvalues λ1 and λ2 approach zero"
          },
          {
            "letter": "D",
            "text": "Trace(M) goes to infinity"
          }
        ],
        "answer": "C",
        "explanation": "A completely flat region yields no gradients, thus meaning zero variance across all axes."
      },
      {
        "number": 15,
        "question": "Which of the following represents a global alternative structure designed to match complete templates irrespective of missing segments and noise?",
        "options": [
          {
            "letter": "A",
            "text": "Spatial Smoothing"
          },
          {
            "letter": "B",
            "text": "Normalized Cross Correlation"
          },
          {
            "letter": "C",
            "text": "Generalized Hough Transform"
          },
          {
            "letter": "D",
            "text": "Point Operations"
          }
        ],
        "answer": "C",
        "explanation": "By utilizing gradient angles voting in an accumulator relative to a global origin, it can detect fragmented complex shapes."
      }
    ]
  },
  {
    "examId": "quiz-0",
    "title": "Lecture Quiz 0: Introduction",
    "questions": [
      {
        "number": 1,
        "question": "In the Human Vision System (HVS), which photoreceptor cells are responsible for color vision?",
        "options": [
          {
            "letter": "A",
            "text": "Rods"
          },
          {
            "letter": "B",
            "text": "Cones"
          },
          {
            "letter": "C",
            "text": "Cornea"
          },
          {
            "letter": "D",
            "text": "Retina"
          }
        ],
        "answer": "B",
        "explanation": "Cones function best in bright light and are responsible for color vision."
      },
      {
        "number": 2,
        "question": "Which theory of color vision proposes separate opponent color channels exist in the retina?",
        "options": [
          {
            "letter": "A",
            "text": "Young & Helmholtz trichromatic theory"
          },
          {
            "letter": "B",
            "text": "Herings opponent color theory"
          },
          {
            "letter": "C",
            "text": "Retinex theory"
          },
          {
            "letter": "D",
            "text": "Gestalt theory"
          }
        ],
        "answer": "B",
        "explanation": "Herings opponent color theory suggests channels for red vs. green, yellow vs. blue, and black vs. white."
      },
      {
        "number": 3,
        "question": "What is the main advantage of image representation by means of quadtrees?",
        "options": [
          {
            "letter": "A",
            "text": "Independence from object orientation"
          },
          {
            "letter": "B",
            "text": "Simple algorithms for addition of images and computing areas"
          },
          {
            "letter": "C",
            "text": "Perfect noise immunity"
          },
          {
            "letter": "D",
            "text": "It stores every pixel redundantly"
          }
        ],
        "answer": "B",
        "explanation": "Quadtrees provide simple algorithms for addition of images, computing object areas, and statistical moments."
      },
      {
        "number": 4,
        "question": "What does the Manhattan distance (L1 Norm) between points p(x1,y1) and q(x2,y2) calculate?",
        "options": [
          {
            "letter": "A",
            "text": "max(|x1-x2|, |y1-y2|)"
          },
          {
            "letter": "B",
            "text": "|x1-x2| + |y1-y2|"
          },
          {
            "letter": "C",
            "text": "sqrt((x1-x2)^2 + (y1-y2)^2)"
          },
          {
            "letter": "D",
            "text": "|x1-x2| * |y1-y2|"
          }
        ],
        "answer": "B",
        "explanation": "The Manhattan distance is D4 = |x1-x2| + |y1-y2|."
      },
      {
        "number": 5,
        "question": "What is the primary purpose of Histogram Equalization?",
        "options": [
          {
            "letter": "A",
            "text": "To detect edges in an image"
          },
          {
            "letter": "B",
            "text": "To remove high-frequency noise"
          },
          {
            "letter": "C",
            "text": "To distribute intensity values evenly, improving global contrast"
          },
          {
            "letter": "D",
            "text": "To convert an RGB image to grayscale"
          }
        ],
        "answer": "C",
        "explanation": "Histogram equalization flattens the histogram to improve global contrast."
      }
    ]
  },
  {
    "examId": "quiz-1",
    "title": "Lecture Quiz 1: Image Processing",
    "questions": [
      {
        "number": 6,
        "question": "Which of the following is true regarding 4-adjacency?",
        "options": [
          {
            "letter": "A",
            "text": "Two pixels are 4-adjacent if they share only a corner."
          },
          {
            "letter": "B",
            "text": "Two pixels are 4-adjacent if their City Block distance D4(p,q) = 1."
          },
          {
            "letter": "C",
            "text": "Two pixels are 4-adjacent if their Chessboard distance D8(p,q) = 1."
          },
          {
            "letter": "D",
            "text": "Two pixels are 4-adjacent if they are located diagonally from each other."
          }
        ],
        "answer": "B",
        "explanation": "4-adjacency strictly requires pixels to be immediately adjacent horizontally or vertically."
      },
      {
        "number": 7,
        "question": "What is the role of the pupil in the Human Vision System?",
        "options": [
          {
            "letter": "A",
            "text": "To interpret colors"
          },
          {
            "letter": "B",
            "text": "To refract light onto the retina"
          },
          {
            "letter": "C",
            "text": "To control the amount of light entering the eye"
          },
          {
            "letter": "D",
            "text": "To transmit electrical signals to the brain"
          }
        ],
        "answer": "C",
        "explanation": "The pupil constricts in bright light and dilates in dim light to regulate light intake."
      },
      {
        "number": 8,
        "question": "When calculating a Distance Transform, what does the resulting image represent?",
        "options": [
          {
            "letter": "A",
            "text": "The Fourier transform frequencies"
          },
          {
            "letter": "B",
            "text": "The distance of each background pixel from the nearest foreground subset pixel"
          },
          {
            "letter": "C",
            "text": "A binary image representing edges"
          },
          {
            "letter": "D",
            "text": "A histogram equalization matrix"
          }
        ],
        "answer": "B",
        "explanation": "The Distance Transform assigns to each pixel the distance to the nearest foreground element."
      },
      {
        "number": 9,
        "question": "Which color blindness type is characterized by the absence of the mid-wave sensitive (green) cone?",
        "options": [
          {
            "letter": "A",
            "text": "Protanopic"
          },
          {
            "letter": "B",
            "text": "Deuteranopic"
          },
          {
            "letter": "C",
            "text": "Tritanopic"
          },
          {
            "letter": "D",
            "text": "Achromatic"
          }
        ],
        "answer": "B",
        "explanation": "Deuteranopic occurs when the mid-wave sensitive cone is missing."
      },
      {
        "number": 10,
        "question": "Which Gestalt principle implies that elements moving in the same direction are perceived as a group?",
        "options": [
          {
            "letter": "A",
            "text": "Law of Similarity"
          },
          {
            "letter": "B",
            "text": "Law of Continuity"
          },
          {
            "letter": "C",
            "text": "Law of Common Fate"
          },
          {
            "letter": "D",
            "text": "Law of Symmetry"
          }
        ],
        "answer": "C",
        "explanation": "The Law of Common Fate groups objects moving in the same direction together."
      }
    ]
  },
  {
    "examId": "quiz-2",
    "title": "Lecture Quiz 2: HVS",
    "questions": [
      {
        "number": 11,
        "question": "What is a crack edge?",
        "options": [
          {
            "letter": "A",
            "text": "An edge with multiple broken pixels"
          },
          {
            "letter": "B",
            "text": "An edge assigned to the space between 4-neighbors when there is a brightness difference"
          },
          {
            "letter": "C",
            "text": "An artifact left by poor JPEG compression"
          },
          {
            "letter": "D",
            "text": "An imaginary line connecting the convex hull"
          }
        ],
        "answer": "B",
        "explanation": "A crack edge exists implicitly between pairs of 4-connected pixels possessing differing properties."
      },
      {
        "number": 12,
        "question": "What is the purpose of image solarization?",
        "options": [
          {
            "letter": "A",
            "text": "Removing all colors"
          },
          {
            "letter": "B",
            "text": "Complementing only part of the image intensity scale"
          },
          {
            "letter": "C",
            "text": "Blurring the background"
          },
          {
            "letter": "D",
            "text": "Changing the lighting angle"
          }
        ],
        "answer": "B",
        "explanation": "Solarization entails complementing certain intensity ranges while leaving others intact."
      },
      {
        "number": 13,
        "question": "In Mathematical Morphology, what operation translates a Structuring Element over a binary image to fill small holes and connect nearby regions?",
        "options": [
          {
            "letter": "A",
            "text": "Erosion"
          },
          {
            "letter": "B",
            "text": "Dilation"
          },
          {
            "letter": "C",
            "text": "Opening"
          },
          {
            "letter": "D",
            "text": "Closing"
          }
        ],
        "answer": "D",
        "explanation": "Filling holes and connecting regions is Closing."
      },
      {
        "number": 14,
        "question": "What morphological operation is defined as Erosion followed by Dilation?",
        "options": [
          {
            "letter": "A",
            "text": "Opening"
          },
          {
            "letter": "B",
            "text": "Closing"
          },
          {
            "letter": "C",
            "text": "Skeletonization"
          },
          {
            "letter": "D",
            "text": "Translation"
          }
        ],
        "answer": "A",
        "explanation": "Opening removes thin lines and isolated noise points."
      },
      {
        "number": 15,
        "question": "What happens when you subtract a constant from each pixel in an image?",
        "options": [
          {
            "letter": "A",
            "text": "Image becomes redder"
          },
          {
            "letter": "B",
            "text": "Image contrast increases"
          },
          {
            "letter": "C",
            "text": "Image brightness decreases"
          },
          {
            "letter": "D",
            "text": "Image becomes inverted"
          }
        ],
        "answer": "C",
        "explanation": "Subtracting a constant shifts the histogram to the left, making the overall image darker."
      }
    ]
  },
  {
    "examId": "quiz-3",
    "title": "Lecture Quiz 3: Representation",
    "questions": [
      {
        "number": 1,
        "question": "Which filter is typically used in the first stage of the Canny Edge Detector?",
        "options": [
          {
            "letter": "A",
            "text": "Median filter"
          },
          {
            "letter": "B",
            "text": "Roberts filter"
          },
          {
            "letter": "C",
            "text": "Gaussian filter"
          },
          {
            "letter": "D",
            "text": "Unsharp Mask"
          }
        ],
        "answer": "C",
        "explanation": "Canny requires Gaussian smoothing before calculating gradients."
      },
      {
        "number": 2,
        "question": "In the Hough Transform with polar coordinates, an edge point (x_i, y_i) maps to what shape in Hough space?",
        "options": [
          {
            "letter": "A",
            "text": "A Line"
          },
          {
            "letter": "B",
            "text": "A single Cell"
          },
          {
            "letter": "C",
            "text": "A Sinusoid"
          },
          {
            "letter": "D",
            "text": "A Hyperbola"
          }
        ],
        "answer": "C",
        "explanation": "An edge point in image space translates to a sinusoidal curve in Hough Space."
      },
      {
        "number": 3,
        "question": "Why is the standard line equation y = mx + c problematic for Hough Transforms?",
        "options": [
          {
            "letter": "A",
            "text": "It uses 3D parameter space"
          },
          {
            "letter": "B",
            "text": "The slope (m) approaches infinity for vertical lines"
          },
          {
            "letter": "C",
            "text": "It is computationally slow"
          },
          {
            "letter": "D",
            "text": "It suppresses all non-maximal edges"
          }
        ],
        "answer": "B",
        "explanation": "Vertical lines cause m to approach infinity, requiring unbounded parameter space. Polar coordinates fix this."
      },
      {
        "number": 4,
        "question": "What is the primary function of Non-Maximal Suppression in edge detection?",
        "options": [
          {
            "letter": "A",
            "text": "To extract regions smoothly"
          },
          {
            "letter": "B",
            "text": "To remove impulse noise"
          },
          {
            "letter": "C",
            "text": "To thin edges to a single pixel width"
          },
          {
            "letter": "D",
            "text": "To increase global contrast"
          }
        ],
        "answer": "C",
        "explanation": "Non-Maximal Suppression discards pixels that are not the local maximum strictly along the gradient direction."
      },
      {
        "number": 5,
        "question": "Which second-derivative operator is highly sensitive to noise and thus usually paired with a Gaussian?",
        "options": [
          {
            "letter": "A",
            "text": "Prewitt"
          },
          {
            "letter": "B",
            "text": "Sobel"
          },
          {
            "letter": "C",
            "text": "Laplacian"
          },
          {
            "letter": "D",
            "text": "Hough"
          }
        ],
        "answer": "C",
        "explanation": "Because the Laplacian involves the second derivative, it amplifies high frequency noise, which is mitigated by preceding it with a Gaussian blur (LoG)."
      }
    ]
  },
  {
    "examId": "quiz-4",
    "title": "Lecture Quiz 4: Edges & Pre-processing",
    "questions": [
      {
        "number": 6,
        "question": "Which 3x3 operator is designed specifically to detect horizontal changes (i.e. vertical edges) by approximating a gradient?",
        "options": [
          {
            "letter": "A",
            "text": "[-1 0 1; -2 0 2; -1 0 1]"
          },
          {
            "letter": "B",
            "text": "[1 1 1; 1 1 1; 1 1 1]"
          },
          {
            "letter": "C",
            "text": "[0 1 0; 1 -4 1; 0 1 0]"
          },
          {
            "letter": "D",
            "text": "[1 2 1; 0 0 0; -1 -2 -1]"
          }
        ],
        "answer": "A",
        "explanation": "This is the vertical Sobel operator matrix. It computes the rate of change along the x-axis."
      },
      {
        "number": 7,
        "question": "High-boost filtering achieves what effect?",
        "options": [
          {
            "letter": "A",
            "text": "Enhances high frequencies while preserving low frequencies"
          },
          {
            "letter": "B",
            "text": "Removes all low frequencies"
          },
          {
            "letter": "C",
            "text": "Translates the image circularly"
          },
          {
            "letter": "D",
            "text": "Creates a binary image from thresholds"
          }
        ],
        "answer": "A",
        "explanation": "It sharpens edges by adding high-frequency details back onto the image while maintaining general tone."
      },
      {
        "number": 8,
        "question": "In Canny edge tracking by hysteresis, what happens to a pixel whose gradient magnitude lies exactly between T_low and T_high?",
        "options": [
          {
            "letter": "A",
            "text": "It is discarded"
          },
          {
            "letter": "B",
            "text": "It is made a strong edge unconditionally"
          },
          {
            "letter": "C",
            "text": "It is marked as a strong edge ONLY if connected to an existing strong edge"
          },
          {
            "letter": "D",
            "text": "It is reassigned a value of 0"
          }
        ],
        "answer": "C",
        "explanation": "Hysteresis uses dual thresholds; weak edges between them are preserved only if contiguous with strong reliable edges."
      },
      {
        "number": 9,
        "question": "For the Generalized Hough Transform detecting arbitrary shapes, what data structure replaces parametric equations?",
        "options": [
          {
            "letter": "A",
            "text": "A kd-tree"
          },
          {
            "letter": "B",
            "text": "An R-table indexed by boundary gradient angles"
          },
          {
            "letter": "C",
            "text": "A sparse 5-dimensional Gaussian matrix"
          },
          {
            "letter": "D",
            "text": "A Markov decision process"
          }
        ],
        "answer": "B",
        "explanation": "The R-table maps boundary gradient orientations to displacement vectors measuring distance to the shape center."
      },
      {
        "number": 10,
        "question": "If 3 collinear points (1,1), (2,2), (3,3) are mapped to Cartesian (m,c) Hough space, what happens?",
        "options": [
          {
            "letter": "A",
            "text": "They form 3 separate parallel lines"
          },
          {
            "letter": "B",
            "text": "They intersect at one specific point (m=1, c=0)"
          },
          {
            "letter": "C",
            "text": "They do not intersect"
          },
          {
            "letter": "D",
            "text": "They form a generalized sinusoid"
          }
        ],
        "answer": "B",
        "explanation": "Collinear points trace intersecting lines in parameter space. Since they define y=1x+0, the lines intersect at m=1, c=0."
      }
    ]
  },
  {
    "examId": "quiz-5",
    "title": "Lecture Quiz 5: Hough Transform",
    "questions": [
      {
        "number": 11,
        "question": "When finding circles with an UNKNOWN radius using Hough Transform, how many dimensions does the accumulator array need?",
        "options": [
          {
            "letter": "A",
            "text": "1D"
          },
          {
            "letter": "B",
            "text": "2D"
          },
          {
            "letter": "C",
            "text": "3D"
          },
          {
            "letter": "D",
            "text": "4D"
          }
        ],
        "answer": "C",
        "explanation": "The parameters are (a, b) for the center and (r) for the radius, creating a 3D accumulator."
      },
      {
        "number": 12,
        "question": "In Median Filtering, what image attribute is notoriously damaged or smoothed out?",
        "options": [
          {
            "letter": "A",
            "text": "Salt-and-Pepper noise"
          },
          {
            "letter": "B",
            "text": "Large homogenous colors"
          },
          {
            "letter": "C",
            "text": "Sky gradients"
          },
          {
            "letter": "D",
            "text": "Thin lines and sharp corners"
          }
        ],
        "answer": "D",
        "explanation": "Median filtering can aggressively eliminate fine details like thin lines because they constitute a minority of the sliding window."
      },
      {
        "number": 13,
        "question": "What is Unsharp Masking?",
        "options": [
          {
            "letter": "A",
            "text": "Subtracting a blurred version of an image from itself to extract high-frequency detail"
          },
          {
            "letter": "B",
            "text": "Blending two separate images together"
          },
          {
            "letter": "C",
            "text": "Detecting edges using a thresholding operation"
          },
          {
            "letter": "D",
            "text": "Compressing the image histogram"
          }
        ],
        "answer": "A",
        "explanation": "The resulting high-frequency signal can then be added back to the original to sharpen it."
      },
      {
        "number": 14,
        "question": "Averaging using a Rotating Mask is an algorithm primarily designed to do what?",
        "options": [
          {
            "letter": "A",
            "text": "Convert color to grayscale"
          },
          {
            "letter": "B",
            "text": "Translate objects randomly"
          },
          {
            "letter": "C",
            "text": "Smooth an image WITHOUT blurring sharp edges"
          },
          {
            "letter": "D",
            "text": "Detect circles purely in binary images"
          }
        ],
        "answer": "C",
        "explanation": "By evaluating variance in shifting sub-masks and selecting the one with lowest variance, it smooths homogenous regions while ignoring the edge side."
      },
      {
        "number": 15,
        "question": "Why are edges defined as perpendicular to the image gradient?",
        "options": [
          {
            "letter": "A",
            "text": "Because the gradient always points down"
          },
          {
            "letter": "B",
            "text": "Because the gradient points in the direction of the FASTEST intensity change"
          },
          {
            "letter": "C",
            "text": "Because it simplifies coordinate transformation"
          },
          {
            "letter": "D",
            "text": "Because gradients only exist at 90-degree intervals"
          }
        ],
        "answer": "B",
        "explanation": "An edge represents the boundary. The gradient points perpendicular to that boundary, directly up the slope of intensity change."
      }
    ]
  },
  {
    "examId": "quiz-6",
    "title": "Lecture Quiz 6: Corners",
    "questions": [
      {
        "number": 1,
        "question": "In the Harris Corner Detector structure tensor (M), what do eigenvalues λ1 and λ2 signify?",
        "options": [
          {
            "letter": "A",
            "text": "Color saturation ratios"
          },
          {
            "letter": "B",
            "text": "Principal curvatures representing rate of intensity change in independent directions"
          },
          {
            "letter": "C",
            "text": "Blob scale dimensions"
          },
          {
            "letter": "D",
            "text": "Fourier phase constants"
          }
        ],
        "answer": "B",
        "explanation": "The eigenvalues denote the maximum and minimum rates of intensity variance within the specified local window."
      },
      {
        "number": 2,
        "question": "When using the Harris response function R = det(M) - k(trace(M))^2, how is a true corner identified?",
        "options": [
          {
            "letter": "A",
            "text": "R is negative"
          },
          {
            "letter": "B",
            "text": "R is precisely zero"
          },
          {
            "letter": "C",
            "text": "R is large and positive"
          },
          {
            "letter": "D",
            "text": "λ1 >> λ2"
          }
        ],
        "answer": "C",
        "explanation": "A large positive R indicates that both eigenvalues are large (significant change in all directions), marking it as a corner."
      },
      {
        "number": 3,
        "question": "Why are corners typically better than straight edges for feature matching/tracking?",
        "options": [
          {
            "letter": "A",
            "text": "Because corners are purely monochromatic"
          },
          {
            "letter": "B",
            "text": "Because shifting the patch in ANY direction results in high variance, avoiding the aperture problem"
          },
          {
            "letter": "C",
            "text": "Because matrices for corners are 1-dimensional"
          },
          {
            "letter": "D",
            "text": "Because flat regions cause division by zero"
          }
        ],
        "answer": "B",
        "explanation": "A straight edge only changes perpendicularly; moving parallel to the edge yields no change, causing ambiguity (aperture problem). Corners change in all directions."
      },
      {
        "number": 4,
        "question": "Which statement is TRUE about the Harris detectors invariance properties?",
        "options": [
          {
            "letter": "A",
            "text": "It is fully scale-invariant"
          },
          {
            "letter": "B",
            "text": "It is highly rotation-invariant but fails on severe scale shifts"
          },
          {
            "letter": "C",
            "text": "It is invariant to extreme geometric perspective projection"
          },
          {
            "letter": "D",
            "text": "It requires an RGB image, making it color-dependent"
          }
        ],
        "answer": "B",
        "explanation": "A sharp corner when magnified significantly will appear as a straight edge to a fixed-size window, breaking the cornerness metric."
      },
      {
        "number": 5,
        "question": "Difference of Gaussians (DoG) is used in SIFT to act as a highly efficient approximation of which operator?",
        "options": [
          {
            "letter": "A",
            "text": "Normalized Laplacian of Gaussian (NLoG)"
          },
          {
            "letter": "B",
            "text": "Canny Non-Maximal Suppression"
          },
          {
            "letter": "C",
            "text": "Prewitt X-Gradient"
          },
          {
            "letter": "D",
            "text": "Discrete Wavelet Transform"
          }
        ],
        "answer": "A",
        "explanation": "Subtracting two neighboring blurred images efficiently approximates the computationally heavy Laplacian of Gaussian for scale-space blob detection."
      }
    ]
  },
  {
    "examId": "quiz-7",
    "title": "Lecture Quiz 7: Blobs",
    "questions": [
      {
        "number": 6,
        "question": "In SIFT keypoint selection, what matrix is analyzed to filter out unstable edge-like responses?",
        "options": [
          {
            "letter": "A",
            "text": "The SIFT descriptor"
          },
          {
            "letter": "B",
            "text": "The Hessian matrix (Curvatures)"
          },
          {
            "letter": "C",
            "text": "The Roberts Operator"
          },
          {
            "letter": "D",
            "text": "The R-table"
          }
        ],
        "answer": "B",
        "explanation": "Like Harris, SIFT checks the principal curvatures using the trace and determinant of the Hessian matrix to reject points with high edge likeness."
      },
      {
        "number": 7,
        "question": "How is the final 128-dimensional SIFT descriptor vector constructed?",
        "options": [
          {
            "letter": "A",
            "text": "Concatenating 128 raw pixel brightness values"
          },
          {
            "letter": "B",
            "text": "Computing orientation histograms across 16 (4x4) subregions, each carrying 8 directional bins"
          },
          {
            "letter": "C",
            "text": "By applying a Fourier transform yielding 128 coefficients"
          },
          {
            "letter": "D",
            "text": "Extracting the 128 largest pixels in the image pyramid"
          }
        ],
        "answer": "B",
        "explanation": "A 16x16 pixel neighborhood is sectioned into a 4x4 grid of subregions. Each subregion maintains an 8-bin histogram of local gradient angles (16*8 = 128)."
      },
      {
        "number": 8,
        "question": "How does SIFT obtain achieving Rotation Invariance?",
        "options": [
          {
            "letter": "A",
            "text": "Using polar sinusoidal waves"
          },
          {
            "letter": "B",
            "text": "By finding the dominant peak in a histogram of gradient orientations and assigning it as a reference angle relative to the patch"
          },
          {
            "letter": "C",
            "text": "It calculates rotational matrices for every degree from 0 to 360"
          },
          {
            "letter": "D",
            "text": "By discarding all directional edge information"
          }
        ],
        "answer": "B",
        "explanation": "SIFT computes the most dominant orientation of the patch and defines its descriptor array geometry relative to this base angle."
      },
      {
        "number": 9,
        "question": "Which of the following best describes the multi-level architecture used in SIFT to search for features?",
        "options": [
          {
            "letter": "A",
            "text": "A single-scale Sobel sweep"
          },
          {
            "letter": "B",
            "text": "An Octave Pyramid where an image is increasingly blurred, DoGs evaluated, and then the image down-sampled for the next octave"
          },
          {
            "letter": "C",
            "text": "A sequence of median filters expanding endlessly"
          },
          {
            "letter": "D",
            "text": "An unsharp mask cascade"
          }
        ],
        "answer": "B",
        "explanation": "This creates the full scale-space where varying object sizes can be intercepted precisely."
      },
      {
        "number": 10,
        "question": "For a local extrema detection in a DoG pyramid, every target pixels value is compared against how many neighboring pixels (spatially and across scale)?",
        "options": [
          {
            "letter": "A",
            "text": "8"
          },
          {
            "letter": "B",
            "text": "9"
          },
          {
            "letter": "C",
            "text": "26"
          },
          {
            "letter": "D",
            "text": "128"
          }
        ],
        "answer": "C",
        "explanation": "It is compared to its 8 spatial neighbors on the same layer, 9 neighbors on the higher layer, and 9 neighbors on the lower layer (8 + 9 + 9 = 26)."
      }
    ]
  },
  {
    "examId": "quiz-8",
    "title": "Lecture Quiz 8: SIFT",
    "questions": [
      {
        "number": 11,
        "question": "In Harris corner detection, if λ1 >> λ2 (one eigenvalue is overwhelmingly greater than the other), what does the image patch resemble?",
        "options": [
          {
            "letter": "A",
            "text": "A corner"
          },
          {
            "letter": "B",
            "text": "A flat region"
          },
          {
            "letter": "C",
            "text": "An edge"
          },
          {
            "letter": "D",
            "text": "A noisy spike"
          }
        ],
        "answer": "C",
        "explanation": "When only one principal direction has significant intensity change, it represents an edge."
      },
      {
        "number": 12,
        "question": "What does SIFT explicitly use to determine a keypoint feature signature, ensuring robustness to illumination shifts?",
        "options": [
          {
            "letter": "A",
            "text": "Differences of raw color values"
          },
          {
            "letter": "B",
            "text": "Image Function Histograms based purely on gradients (derivatives)"
          },
          {
            "letter": "C",
            "text": "Haar-like binary patterns"
          },
          {
            "letter": "D",
            "text": "Machine learning based neural networks"
          }
        ],
        "answer": "B",
        "explanation": "Because SIFT focuses exclusively on derivatives/gradients, it possesses natural invariance to uniform intensity shifts (like lighting variations)."
      },
      {
        "number": 13,
        "question": "Why does SIFT perform a sub-pixel quadratic curve fit on candidates?",
        "options": [
          {
            "letter": "A",
            "text": "To discard flat features implicitly"
          },
          {
            "letter": "B",
            "text": "To refine point coordinates and interpolate scale positioning mathematically precisely"
          },
          {
            "letter": "C",
            "text": "To compress the image size by 1/4"
          },
          {
            "letter": "D",
            "text": "To adjust for color balancing"
          }
        ],
        "answer": "B",
        "explanation": "Raw DoG arrays only pinpoint features on discrete grids. Quadratic interpolation estimates the true peak across the geometric space and scale."
      },
      {
        "number": 14,
        "question": "If a local image patch possesses uniform intensity everywhere, what occurs within the Harris structure tensor matrix M?",
        "options": [
          {
            "letter": "A",
            "text": "It overflows"
          },
          {
            "letter": "B",
            "text": "Its determinant is extremely negative"
          },
          {
            "letter": "C",
            "text": "Both eigenvalues λ1 and λ2 approach zero"
          },
          {
            "letter": "D",
            "text": "Trace(M) goes to infinity"
          }
        ],
        "answer": "C",
        "explanation": "A completely flat region yields no gradients, thus meaning zero variance across all axes."
      },
      {
        "number": 15,
        "question": "Which of the following represents a global alternative structure designed to match complete templates irrespective of missing segments and noise?",
        "options": [
          {
            "letter": "A",
            "text": "Spatial Smoothing"
          },
          {
            "letter": "B",
            "text": "Normalized Cross Correlation"
          },
          {
            "letter": "C",
            "text": "Generalized Hough Transform"
          },
          {
            "letter": "D",
            "text": "Point Operations"
          }
        ],
        "answer": "C",
        "explanation": "By utilizing gradient angles voting in an accumulator relative to a global origin, it can detect fragmented complex shapes."
      }
    ]
  }
];

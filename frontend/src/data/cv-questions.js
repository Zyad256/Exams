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
    "title": "Lecture Quiz 0: Introduction to Computer Vision",
    "questions": [
      {
        "number": 1,
        "question": "What is the primary objective of Computer Vision as a scientific discipline?",
        "options": [
          {
            "letter": "A",
            "text": "To capture high-speed digital video streams without loss"
          },
          {
            "letter": "B",
            "text": "To mimic biological vision by reconstructing and interpreting a 3D scene from 2D projections"
          },
          {
            "letter": "C",
            "text": "To compress multidimensional graphics files using optical transformations"
          },
          {
            "letter": "D",
            "text": "To mathematically filter noise from lens sensor arrays"
          }
        ],
        "answer": "B",
        "explanation": "Computer Vision aims to build automated systems that can reconstruct, analyze, and understand the 3D structures and semantics of a physical scene based on 2D images."
      },
      {
        "number": 2,
        "question": "Which of the following represents a classic challenge in Computer Vision where a single physical object appears completely different to a camera?",
        "options": [
          {
            "letter": "A",
            "text": "High bandwidth fiber optic transmissions"
          },
          {
            "letter": "B",
            "text": "Variations in scene illumination, camera perspective angle, occlusion, and shape deformation"
          },
          {
            "letter": "C",
            "text": "Converting floating-point coordinates to integer scales"
          },
          {
            "letter": "D",
            "text": "Lack of high-definition 4K resolution sensors"
          }
        ],
        "answer": "B",
        "explanation": "Illumination changes, perspective shifts, occlusion (objects hiding others), and deformation represent fundamental physical challenges that cause raw pixel brightness matrices of the same object to vary radically."
      },
      {
        "number": 3,
        "question": "In geometric camera optics, what is the direct visual effect of decreasing a camera lens's focal length?",
        "options": [
          {
            "letter": "A",
            "text": "The resolution of the image sensor is doubled"
          },
          {
            "letter": "B",
            "text": "The field of view narrows and objects appear much larger"
          },
          {
            "letter": "C",
            "text": "The field of view broadens and captured objects appear smaller in the frame"
          },
          {
            "letter": "D",
            "text": "Spherical aberration is completely eliminated"
          }
        ],
        "answer": "C",
        "explanation": "A shorter focal length increases the angular field of view, expanding the captured perspective while shrinking individual object sizes."
      },
      {
        "number": 4,
        "question": "How does the idealized pinhole camera model ensure that the projected image of a 3D scene remains sharp and in-focus?",
        "options": [
          {
            "letter": "A",
            "text": "It uses an active autofocus micro-lens"
          },
          {
            "letter": "B",
            "text": "It permits only a single ray of light from any given scene point to reach the image plane, eliminating overlapping rays"
          },
          {
            "letter": "C",
            "text": "It applies a digital deconvolution filter in real-time"
          },
          {
            "letter": "D",
            "text": "It relies on a highly sensitive electronic CCD sensor"
          }
        ],
        "answer": "B",
        "explanation": "By narrowing the aperture to an infinitesimal point, the pinhole prevents multiple light rays from a single coordinate from hitting different spots on the image plane, avoiding blur."
      },
      {
        "number": 5,
        "question": "Which statement best highlights the fundamental difference between Human Vision and standard Computer Vision systems?",
        "options": [
          {
            "letter": "A",
            "text": "Computers process colors faster than the human optic nerve"
          },
          {
            "letter": "B",
            "text": "Human vision operates exclusively in a continuous analog domain while computers are digital"
          },
          {
            "letter": "C",
            "text": "Human vision utilizes high-level cognitive context and prior knowledge to interpret semantics, whereas computers must infer structure mathematically from raw pixel matrices"
          },
          {
            "letter": "D",
            "text": "Computers can easily handle occlusion while humans cannot"
          }
        ],
        "answer": "C",
        "explanation": "Human vision seamlessly bridges raw perception and cognitive reasoning (understanding *what* is seen instantly), whereas computer vision is a bottom-up challenge starting from discrete numeric matrices."
      }
    ]
  },
  {
    "examId": "quiz-1",
    "title": "Lecture Quiz 1: Image Processing Revision",
    "questions": [
      {
        "number": 1,
        "question": "What is the mathematical definition of a digital 2D image?",
        "options": [
          {
            "letter": "A",
            "text": "A list of hexadecimal vectors measuring depth"
          },
          {
            "letter": "B",
            "text": "A discrete 2D function f(x, y) where x and y represent spatial coordinates, and f is the intensity or brightness value"
          },
          {
            "letter": "C",
            "text": "A continuous geometric shape consisting of polygon meshes"
          },
          {
            "letter": "D",
            "text": "A list of color frequencies in the Fourier domain"
          }
        ],
        "answer": "B",
        "explanation": "In computer vision, a digital image is represented as a 2D grid/function f(x, y) where each coordinate maps to a discrete intensity level (pixel value)."
      },
      {
        "number": 2,
        "question": "Which image point operation complements a specific intensity range while leaving other brightness levels untouched, producing a solar film effect?",
        "options": [
          {
            "letter": "A",
            "text": "Contrast Stretching"
          },
          {
            "letter": "B",
            "text": "Histogram equalization"
          },
          {
            "letter": "C",
            "text": "Image Solarization"
          },
          {
            "letter": "D",
            "text": "Binary Thresholding"
          }
        ],
        "answer": "C",
        "explanation": "Solarization complements (inverts) specific ranges of image intensities while leaving other brightness levels unchanged."
      },
      {
        "number": 3,
        "question": "What happens mathematically and visually when you subtract a constant brightness value from each pixel in a grayscale image?",
        "options": [
          {
            "letter": "A",
            "text": "The image contrast increases"
          },
          {
            "letter": "B",
            "text": "The histogram shifts to the left, and the image brightness decreases"
          },
          {
            "letter": "C",
            "text": "The image becomes inverted (negative)"
          },
          {
            "letter": "D",
            "text": "High-frequency noise is removed"
          }
        ],
        "answer": "B",
        "explanation": "Subtracting a constant shifts the entire intensity histogram lower (to the left), making every pixel darker and decreasing overall brightness."
      },
      {
        "number": 4,
        "question": "What is the primary function of Histogram Equalization in point processing?",
        "options": [
          {
            "letter": "A",
            "text": "To filter out salt-and-pepper noise"
          },
          {
            "letter": "B",
            "text": "To align the image to a global coordinate frame"
          },
          {
            "letter": "C",
            "text": "To distribute pixel intensities evenly across the grayscale, improving global contrast"
          },
          {
            "letter": "D",
            "text": "To automatically detect edges"
          }
        ],
        "answer": "C",
        "explanation": "Histogram Equalization flattens the intensity distribution, stretching out the most populated brightness levels to improve contrast."
      },
      {
        "number": 5,
        "question": "How does a spatial convolution filter (like a Gaussian kernel) achieve image smoothing?",
        "options": [
          {
            "letter": "A",
            "text": "By shifting the image pixels to the right"
          },
          {
            "letter": "B",
            "text": "By calculating the average of a pixel and its neighbors, weighted inversely by their distance from the center, removing high-frequency noise"
          },
          {
            "letter": "C",
            "text": "By setting all pixels below a threshold to zero"
          },
          {
            "letter": "D",
            "text": "By stretching the edges of the image"
          }
        ],
        "answer": "B",
        "explanation": "Gaussian smoothing is a weighted average convolution where nearby pixels contribute more than distant ones, dampening rapid noise fluctuations (high frequencies)."
      }
    ]
  },
  {
    "examId": "quiz-2",
    "title": "Lecture Quiz 2: Human Vision System (HVS)",
    "questions": [
      {
        "number": 1,
        "question": "In the Human Vision System (HVS), which photoreceptor cells are responsible for high-resolution color vision in bright light conditions?",
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
            "text": "Fovea"
          },
          {
            "letter": "D",
            "text": "Optic chiasm"
          }
        ],
        "answer": "B",
        "explanation": "Cones operate in photopic (bright light) conditions and are responsible for capturing color details, while rods are highly sensitive but color-blind and handle scotopic (dim light) vision."
      },
      {
        "number": 2,
        "question": "Which theory of color vision proposes that separate opponent color channels (red-green, blue-yellow, black-white) exist in the human visual pathway?",
        "options": [
          {
            "letter": "A",
            "text": "Young-Helmholtz trichromatic theory"
          },
          {
            "letter": "B",
            "text": "Hering's opponent color theory"
          },
          {
            "letter": "C",
            "text": "Retinex theory"
          },
          {
            "letter": "D",
            "text": "Gestalt perceptual theory"
          }
        ],
        "answer": "B",
        "explanation": "Hering's opponent color theory states that visual receptors process color as antagonistic pairs (red vs. green, blue vs. yellow, and black vs. white)."
      },
      {
        "number": 3,
        "question": "What is the physical function of the pupil in the Human Vision System?",
        "options": [
          {
            "letter": "A",
            "text": "To focus light rays directly onto the fovea"
          },
          {
            "letter": "B",
            "text": "To control the amount of light entering the eye by dilating or constricting"
          },
          {
            "letter": "C",
            "text": "To translate light energy into electrical neural impulses"
          },
          {
            "letter": "D",
            "text": "To filter out harmful ultraviolet radiation"
          }
        ],
        "answer": "B",
        "explanation": "The pupil acts as an adjustable aperture, expanding in low light to maximize capture and contracting in bright light to protect the retina."
      },
      {
        "number": 4,
        "question": "Which type of color blindness is characterized by the absolute absence of the mid-wave sensitive (green) cone photoreceptors?",
        "options": [
          {
            "letter": "A",
            "text": "Protanopia"
          },
          {
            "letter": "B",
            "text": "Deuteranopia"
          },
          {
            "letter": "C",
            "text": "Tritanopia"
          },
          {
            "letter": "D",
            "text": "Achromatopsia"
          }
        ],
        "answer": "B",
        "explanation": "Deuteranopia is color blindness caused by the complete lack of green (medium-wavelength) cones, shifting green-red discrimination."
      },
      {
        "number": 5,
        "question": "Which Gestalt grouping principle states that elements moving in the same direction or with the same speed are immediately perceived as a single, coherent group?",
        "options": [
          {
            "letter": "A",
            "text": "Law of Similarity"
          },
          {
            "letter": "B",
            "text": "Law of Proximity"
          },
          {
            "letter": "C",
            "text": "Law of Common Fate"
          },
          {
            "letter": "D",
            "text": "Law of Continuity"
          }
        ],
        "answer": "C",
        "explanation": "The Law of Common Fate groups visual elements together if they share a common direction, velocity, or trajectory of motion."
      }
    ]
  },
  {
    "examId": "quiz-3",
    "title": "Lecture Quiz 3: Image Properties & Representation",
    "questions": [
      {
        "number": 1,
        "question": "What is the City Block distance (D4 or Manhattan distance) between the image coordinates p(1, 1) and q(4, 5)?",
        "options": [
          {
            "letter": "A",
            "text": "5"
          },
          {
            "letter": "B",
            "text": "7"
          },
          {
            "letter": "C",
            "text": "9"
          },
          {
            "letter": "D",
            "text": "12"
          }
        ],
        "answer": "B",
        "explanation": "D4 distance is computed as |x1 - x2| + |y1 - y2|. Here, |1 - 4| + |1 - 5| = 3 + 4 = 7."
      },
      {
        "number": 2,
        "question": "In topological image properties, what is a crack edge?",
        "options": [
          {
            "letter": "A",
            "text": "An edge boundary line that is fragmented due to lossy JPEG compression"
          },
          {
            "letter": "B",
            "text": "An edge assigned to the infinitesimal space between 4-neighbors when their intensities differ"
          },
          {
            "letter": "C",
            "text": "A line of noise that splits an object in half"
          },
          {
            "letter": "D",
            "text": "The convex outline of a binary structure"
          }
        ],
        "answer": "B",
        "explanation": "Crack edges are topological concepts where edges run in the grid-spaces directly between adjacent pixels."
      },
      {
        "number": 3,
        "question": "In Mathematical Morphology, which operation translates a structuring element over a binary image to fill narrow gaps, join nearby components, and eliminate tiny holes?",
        "options": [
          {
            "letter": "A",
            "text": "Erosion"
          },
          {
            "letter": "B",
            "text": "Opening"
          },
          {
            "letter": "C",
            "text": "Closing"
          },
          {
            "letter": "D",
            "text": "Dilation"
          }
        ],
        "answer": "C",
        "explanation": "Closing is defined as Dilation followed by Erosion. It bridges thin gaps, smooths contours from the outside, and fills small background holes."
      },
      {
        "number": 4,
        "question": "What is the primary architectural advantage of representing a binary image using a hierarchical Quadtree structure?",
        "options": [
          {
            "letter": "A",
            "text": "It guarantees perfect invariance to rotation and scale changes"
          },
          {
            "letter": "B",
            "text": "It provides extremely fast, simple recursive algorithms to combine images, compute areas, and extract statistics"
          },
          {
            "letter": "C",
            "text": "It compresses continuous color images without losing fine details"
          },
          {
            "letter": "D",
            "text": "It completely removes Gaussian white noise"
          }
        ],
        "answer": "B",
        "explanation": "Quadtrees recursively subdivide quadrants, storing homogenous blocks and enabling rapid Boolean and statistical grid operations."
      },
      {
        "number": 5,
        "question": "Which of the following conditions must be met for two pixels p and q to be considered 4-adjacent in a binary grid?",
        "options": [
          {
            "letter": "A",
            "text": "They must share only a diagonal corner"
          },
          {
            "letter": "B",
            "text": "They must share a horizontal or vertical boundary, meaning their City Block distance is exactly 1"
          },
          {
            "letter": "C",
            "text": "Their Euclidean distance must be less than 2"
          },
          {
            "letter": "D",
            "text": "They must be in the same connected quadrant"
          }
        ],
        "answer": "B",
        "explanation": "4-adjacency strictly limits neighbors to vertical and horizontal connections, where D4 distance equals 1."
      }
    ]
  },
  {
    "examId": "quiz-4",
    "title": "Lecture Quiz 4: Local Pre-processing & Edge Detection",
    "questions": [
      {
        "number": 1,
        "question": "Why are image edges defined perpendicular to the direction of the local gradient vector?",
        "options": [
          {
            "letter": "A",
            "text": "Because the gradient vector points along the flat homogeneous regions"
          },
          {
            "letter": "B",
            "text": "Because the gradient vector points in the direction of the steepest intensity increase, so the edge boundary runs along the contour perpendicular to this vector"
          },
          {
            "letter": "C",
            "text": "Because it simplifies coordinate scaling in polar spaces"
          },
          {
            "letter": "D",
            "text": "Because edges only exist at exactly 90-degree angles"
          }
        ],
        "answer": "B",
        "explanation": "The gradient vector points in the direction of maximum intensity change. The edge runs along the boundary of transition, perpendicular to that direction."
      },
      {
        "number": 2,
        "question": "Which gradient operator uses 3x3 matrices to approximate derivatives along the horizontal and vertical directions, weighting the center pixel by 2 to provide built-in noise smoothing?",
        "options": [
          {
            "letter": "A",
            "text": "Roberts Operator"
          },
          {
            "letter": "B",
            "text": "Prewitt Operator"
          },
          {
            "letter": "C",
            "text": "Sobel Operator"
          },
          {
            "letter": "D",
            "text": "Laplacian Operator"
          }
        ],
        "answer": "C",
        "explanation": "The Sobel operator applies a central weighting of 2 (e.g. [-1 0 1; -2 0 2; -1 0 1]) to smooth high frequency noise while calculating derivatives."
      },
      {
        "number": 3,
        "question": "In the Canny Edge Detection pipeline, what is the primary role of Non-Maximal Suppression (NMS)?",
        "options": [
          {
            "letter": "A",
            "text": "To filter out low-frequency background lighting"
          },
          {
            "letter": "B",
            "text": "To thin the broad gradient magnitude responses down to sharp, single-pixel wide edge ridges"
          },
          {
            "letter": "C",
            "text": "To connect broken edges using a dual threshold"
          },
          {
            "letter": "D",
            "text": "To smooth the raw image using a Gaussian blur"
          }
        ],
        "answer": "B",
        "explanation": "NMS checks if a pixel is a local maximum in the direction of the gradient; if not, it is suppressed (set to 0), producing thin borders."
      },
      {
        "number": 4,
        "question": "How does the rotating mask smoothing algorithm differ from a simple spatial average filter?",
        "options": [
          {
            "letter": "A",
            "text": "It rotates the image coordinates by 90 degrees"
          },
          {
            "letter": "B",
            "text": "It evaluates local variance in multiple surrounding sub-masks and smooths using the one with the lowest variance, preserving sharp edges"
          },
          {
            "letter": "C",
            "text": "It averages only the diagonal pixels"
          },
          {
            "letter": "D",
            "text": "It runs in the frequency domain using a Fast Fourier Transform"
          }
        ],
        "answer": "B",
        "explanation": "By choosing the sub-mask with the smallest variance, the rotating mask avoids averaging across edge boundaries, maintaining edge sharpness."
      },
      {
        "number": 5,
        "question": "In Canny edge tracking by hysteresis, what is the specific role of the low and high thresholds (T_low, T_high)?",
        "options": [
          {
            "letter": "A",
            "text": "To separate the red, green, and blue color channels"
          },
          {
            "letter": "B",
            "text": "To declare pixels above T_high as strong edges, and keep pixels between T_low and T_high as weak edges only if they are connected to strong edges"
          },
          {
            "letter": "C",
            "text": "To discard all pixels with negative gradient values"
          },
          {
            "letter": "D",
            "text": "To calibrate the camera sensor sensitivity automatically"
          }
        ],
        "answer": "B",
        "explanation": "Hysteresis thresholding prevents edge fragmentation by tracking weak but valid edges that are connected structurally to highly confident strong edges."
      }
    ]
  },
  {
    "examId": "quiz-5",
    "title": "Lecture Quiz 5: Hough Transform",
    "questions": [
      {
        "number": 1,
        "question": "In the standard Hough Transform for line detection, why is the polar equation r = x*cos(theta) + y*sin(theta) preferred over the Cartesian slope-intercept equation y = mx + c?",
        "options": [
          {
            "letter": "A",
            "text": "Polar coordinate math uses less accumulator memory"
          },
          {
            "letter": "B",
            "text": "Vertical lines have an infinite slope m, requiring an unbounded parameter space; the polar space (r, theta) is fully bounded"
          },
          {
            "letter": "C",
            "text": "Polar coordinates automatically smooth high-frequency image noise"
          },
          {
            "letter": "D",
            "text": "It can only detect lines that pass directly through the origin"
          }
        ],
        "answer": "B",
        "explanation": "As lines approach vertical, slope m goes to infinity. The polar representation bounds theta to [-90, 90] degrees and r to the image diagonal, enabling finite accumulator arrays."
      },
      {
        "number": 2,
        "question": "In the polar Hough Transform, a single isolated edge pixel (x_i, y_i) in image space maps to what shape in the parameter space?",
        "options": [
          {
            "letter": "A",
            "text": "A straight line"
          },
          {
            "letter": "B",
            "text": "A single point"
          },
          {
            "letter": "C",
            "text": "A sinusoidal curve"
          },
          {
            "letter": "D",
            "text": "A circle"
          }
        ],
        "answer": "C",
        "explanation": "An image coordinate acts as a constraint in parameter space, plotting a sinusoidal curve of all possible lines (r, theta) that could pass through it."
      },
      {
        "number": 3,
        "question": "When utilizing the Hough Transform to locate circular shapes of UNKNOWN radius, what is the dimensionality of the required accumulator array?",
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
        "explanation": "A circle is parametrized by center coordinates (a, b) and radius (r). Unknown radius requires voting across a 3D parameter space."
      },
      {
        "number": 4,
        "question": "For the Generalized Hough Transform (GHT) designed to detect arbitrary non-parametric shapes, what data structure replaces mathematical parametric equations?",
        "options": [
          {
            "letter": "A",
            "text": "A lookup kd-tree"
          },
          {
            "letter": "B",
            "text": "An R-table that maps boundary gradient orientation angles to reference point displacement vectors"
          },
          {
            "letter": "C",
            "text": "A multi-octave Gaussian pyramid"
          },
          {
            "letter": "D",
            "text": "A 128-dimensional orientation vector"
          }
        ],
        "answer": "B",
        "explanation": "The R-table lists vectors pointing from shape boundary points to a chosen reference center, indexed by local edge gradient directions."
      },
      {
        "number": 5,
        "question": "If three collinear points lying on the line y = 1x + 0 are transformed into the Cartesian (m, c) Hough parameter space, what will their resulting lines do?",
        "options": [
          {
            "letter": "A",
            "text": "They will run completely parallel to each other"
          },
          {
            "letter": "B",
            "text": "They will intersect exactly at a single point coordinate where m=1 and c=0"
          },
          {
            "letter": "C",
            "text": "They will form a concentric triangle"
          },
          {
            "letter": "D",
            "text": "They will cancel each other out"
          }
        ],
        "answer": "B",
        "explanation": "Points sharing a line in image space translate to parameter lines that intersect at the exact parameters (m, c) of that shared line."
      }
    ]
  },
  {
    "examId": "quiz-6",
    "title": "Lecture Quiz 6: Corner Detection",
    "questions": [
      {
        "number": 1,
        "question": "What is the aperture problem in computer vision local patch tracking?",
        "options": [
          {
            "letter": "A",
            "text": "The camera lens aperture is too small to capture color"
          },
          {
            "letter": "B",
            "text": "A straight edge viewed through a small local window appears to move only perpendicular to itself, making its motion along the edge direction ambiguous"
          },
          {
            "letter": "C",
            "text": "Images appearing inverted in pinhole models"
          },
          {
            "letter": "D",
            "text": "Eigenvalues dividing by zero in flat regions"
          }
        ],
        "answer": "B",
        "explanation": "Since there is no intensity variation along a straight line edge, its movement parallel to itself cannot be resolved locally. Corners resolve this ambiguity."
      },
      {
        "number": 2,
        "question": "In the Harris Corner Detector, how does the structure tensor matrix M characterize a completely flat, homogeneous image patch?",
        "options": [
          {
            "letter": "A",
            "text": "Both eigenvalues λ1 and λ2 are extremely close to zero, indicating minimal intensity variance in all directions"
          },
          {
            "letter": "B",
            "text": "One eigenvalue is very large and the other is zero"
          },
          {
            "letter": "C",
            "text": "Both eigenvalues are large and positive"
          },
          {
            "letter": "D",
            "text": "The determinant of M is negative"
          }
        ],
        "answer": "A",
        "explanation": "Homogeneous patches have zero gradients, which forces the structure tensor elements to zero, yielding tiny eigenvalues."
      },
      {
        "number": 3,
        "question": "When using the Harris response function R = det(M) - k(trace(M))^2, how is a true corner distinguished from a straight edge?",
        "options": [
          {
            "letter": "A",
            "text": "A corner yields a highly negative R value"
          },
          {
            "letter": "B",
            "text": "A corner yields a large positive R value, while an edge yields a negative R value"
          },
          {
            "letter": "C",
            "text": "A corner forces R to be exactly zero"
          },
          {
            "letter": "D",
            "text": "An edge yields a positive R value"
          }
        ],
        "answer": "B",
        "explanation": "If both eigenvalues are large (corner), det(M) dominates, making R large and positive. If only one is large (edge), the trace term dominates, making R negative."
      },
      {
        "number": 4,
        "question": "Why is the classic Harris Corner Detector NOT scale-invariant?",
        "options": [
          {
            "letter": "A",
            "text": "Because it relies exclusively on integer coordinates"
          },
          {
            "letter": "B",
            "text": "A sharp corner, when magnified significantly, will appear as a straight edge to a fixed-size local window, reducing its cornerness score"
          },
          {
            "letter": "C",
            "text": "It is highly sensitive to rotation changes"
          },
          {
            "letter": "D",
            "text": "It can only be computed on grayscale images"
          }
        ],
        "answer": "B",
        "explanation": "Zooming in on a corner turns the sharp junction into a smooth line at a small local scale, changing its classification from corner to edge."
      },
      {
        "number": 5,
        "question": "In Harris corner detection, if one eigenvalue is overwhelmingly greater than the other (λ1 >> λ2), what does the local patch represent?",
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
        "explanation": "When there is high gradient variance in one principal direction but near-zero in the orthogonal direction, it indicates a straight line edge."
      }
    ]
  },
  {
    "examId": "quiz-7",
    "title": "Lecture Quiz 7: Scale-Space & Blobs",
    "questions": [
      {
        "number": 1,
        "question": "What is the mathematical concept behind scale-space representation of a digital image?",
        "options": [
          {
            "letter": "A",
            "text": "Rescaling the image dynamically from 4K down to 1080p"
          },
          {
            "letter": "B",
            "text": "Convolving the image with a family of Gaussian kernels of increasing variance to analyze features at multiple scales"
          },
          {
            "letter": "C",
            "text": "Rotating the image in 3D perspective space"
          },
          {
            "letter": "D",
            "text": "Segmenting the image into four quadrants"
          }
        ],
        "answer": "B",
        "explanation": "Scale-space simulates viewing an image at different distances, smoothing out fine details to analyze larger structures systematically using Gaussian blurs."
      },
      {
        "number": 2,
        "question": "Which second-derivative operator is highly sensitive to noise and is convolved with a Gaussian (forming the Laplacian of Gaussian, LoG) to detect circular blob structures?",
        "options": [
          {
            "letter": "A",
            "text": "Sobel"
          },
          {
            "letter": "B",
            "text": "Laplacian"
          },
          {
            "letter": "C",
            "text": "Roberts"
          },
          {
            "letter": "D",
            "text": "Hessian"
          }
        ],
        "answer": "B",
        "explanation": "The Laplacian measures isotropic second derivatives, peaking at circular intensity transitions. Pairing it with a Gaussian (LoG) filters noise before derivation."
      },
      {
        "number": 3,
        "question": "Why is Difference of Gaussians (DoG) widely used in blob detection instead of the normalized Laplacian of Gaussian (NLoG)?",
        "options": [
          {
            "letter": "A",
            "text": "DoG is completely invariant to rotations"
          },
          {
            "letter": "B",
            "text": "DoG is a highly efficient approximation that is computed by simply subtracting two adjacent scale blurred images, avoiding expensive second derivatives"
          },
          {
            "letter": "C",
            "text": "DoG works on color images natively"
          },
          {
            "letter": "D",
            "text": "DoG does not require scale parameters"
          }
        ],
        "answer": "B",
        "explanation": "Subtracting two Gaussian-blurred scale images approximates the heat diffusion equation (Laplacian), saving massive CPU cycles by replacing second derivatives with subtraction."
      },
      {
        "number": 4,
        "question": "To find local extrema in a SIFT Difference of Gaussians (DoG) scale-space pyramid, a target pixel is compared against how many neighbors?",
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
        "explanation": "The pixel is compared to 8 spatial neighbors on its own scale layer, and 9 neighbors on the scale layers immediately above and below (8 + 9 + 9 = 26)."
      },
      {
        "number": 5,
        "question": "What matrix of partial derivatives is evaluated in scale-space interest point selection to reject unstable edge-like points?",
        "options": [
          {
            "letter": "A",
            "text": "Structure Tensor M"
          },
          {
            "letter": "B",
            "text": "Hessian Matrix"
          },
          {
            "letter": "C",
            "text": "R-table matrix"
          },
          {
            "letter": "D",
            "text": "Jacobian vector"
          }
        ],
        "answer": "B",
        "explanation": "The Hessian matrix of second partial derivatives is checked. High ratio of principal curvatures (similar to Harris) indicates an unstable edge-like point, which is rejected."
      }
    ]
  },
  {
    "examId": "quiz-8",
    "title": "Lecture Quiz 8: SIFT Detector & Descriptor",
    "questions": [
      {
        "number": 1,
        "question": "How does the Scale-Invariant Feature Transform (SIFT) achieve high robustness against uniform illumination changes?",
        "options": [
          {
            "letter": "A",
            "text": "By shifting the image colors to a calibrated gray scale"
          },
          {
            "letter": "B",
            "text": "By computing its descriptor vector exclusively from local image gradients/derivatives rather than absolute pixel intensities"
          },
          {
            "letter": "C",
            "text": "By multiplying the pixel brightness by a constant factor"
          },
          {
            "letter": "D",
            "text": "By using a neural network trained under multiple lighting conditions"
          }
        ],
        "answer": "B",
        "explanation": "Derivatives/gradients ignore constant intensity additions, making SIFT robust to global exposure changes."
      },
      {
        "number": 2,
        "question": "In SIFT, how is Rotation Invariance achieved for a selected keypoint interest point?",
        "options": [
          {
            "letter": "A",
            "text": "By checking all rotations from 0 to 360 degrees during template matching"
          },
          {
            "letter": "B",
            "text": "By constructing a gradient orientation histogram of the patch, finding the dominant peak, and assigning it as a reference angle for the descriptor"
          },
          {
            "letter": "C",
            "text": "By converting the patch coordinates to complex numbers"
          },
          {
            "letter": "D",
            "text": "By ignoring all directional information entirely"
          }
        ],
        "answer": "B",
        "explanation": "Calculating the dominant local gradient angle allows SIFT to rotate the descriptor patch coordinates relative to this base angle, ensuring rotation invariance."
      },
      {
        "number": 3,
        "question": "How is the final 128-dimensional SIFT descriptor vector constructed from a keypoint's local neighborhood?",
        "options": [
          {
            "letter": "A",
            "text": "By concatenating 128 absolute pixel brightness values"
          },
          {
            "letter": "B",
            "text": "A 16x16 pixel neighborhood is divided into a 4x4 grid of subregions; each subregion computes an 8-bin orientation histogram, yielding 16 * 8 = 128 dimensions"
          },
          {
            "letter": "C",
            "text": "By evaluating a 128-degree Hough accumulator"
          },
          {
            "letter": "D",
            "text": "By downsampling the image 128 times"
          }
        ],
        "answer": "B",
        "explanation": "The 16x16 patch is divided into 16 sub-blocks. Each sub-block's gradients are binned into 8 direction bins, producing a robust 128-dimensional signature."
      },
      {
        "number": 4,
        "question": "Why does SIFT perform a sub-pixel quadratic curve fit (Taylor series expansion) on keypoint candidates?",
        "options": [
          {
            "letter": "A",
            "text": "To discard flat features implicitly"
          },
          {
            "letter": "B",
            "text": "To refine the discrete grid coordinate coordinates and interpolate the scale space position with high mathematical precision"
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
        "explanation": "Taylor series expansion estimates the true peak across the spatial grid and scale coordinates, resolving sub-pixel locations."
      },
      {
        "number": 5,
        "question": "During the SIFT keypoint localization stage, candidates along sharp ridges of Difference of Gaussians (DoG) are discarded. Why?",
        "options": [
          {
            "letter": "A",
            "text": "They have high principal curvature in one direction but low in the other (edge likeness), making them unstable and highly sensitive to minor noise"
          },
          {
            "letter": "B",
            "text": "They are located in flat homogeneous regions"
          },
          {
            "letter": "C",
            "text": "They are completely dark"
          },
          {
            "letter": "D",
            "text": "They are identical to corners"
          }
        ],
        "answer": "A",
        "explanation": "Like Harris corner structures, SIFT checks the Hessian eigenvalues. Points with high edge-likeness are sensitive to noise and are eliminated to improve stability."
      }
    ]
  }
];


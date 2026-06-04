export const examData = [
  {
    "examId": 0,
    "title": "Exam 1: Regression Foundations & Scaling",
    "questions": [
      {
        "number": 1,
        "type": "mcq",
        "question": "What is the primary characteristic of univariate linear regression?",
        "options": [
          {"letter": "A", "text": "It uses multiple input features to predict a binary output"},
          {"letter": "B", "text": "It uses a single input feature to predict a continuous numerical value"},
          {"letter": "C", "text": "It groups unlabeled data points into clusters"},
          {"letter": "D", "text": "It maps inputs to multiple classes simultaneously"}
        ],
        "answer": "B",
        "explanation": "Univariate linear regression uses a single input feature (x) to fit a straight line and predict a continuous numeric output (y)."
      },
      {
        "number": 2,
        "type": "mcq",
        "question": "In the linear regression model f(x) = wx + b, what is the role of parameter w?",
        "options": [
          {"letter": "A", "text": "It acts as the y-intercept (bias) of the line"},
          {"letter": "B", "text": "It represents the input feature value"},
          {"letter": "C", "text": "It represents the slope (weight) of the line"},
          {"letter": "D", "text": "It represents the number of training examples"}
        ],
        "answer": "C",
        "explanation": "w is the weight, which controls the slope (rotation) of the fitted regression line."
      },
      {
        "number": 3,
        "type": "mcq",
        "question": "In linear regression notation, what does m represent?",
        "options": [
          {"letter": "A", "text": "The weight of the model"},
          {"letter": "B", "text": "The number of training examples in the dataset"},
          {"letter": "C", "text": "The target prediction value"},
          {"letter": "D", "text": "The index of a specific training example"}
        ],
        "answer": "B",
        "explanation": "m is universally used in these lectures to denote the total number of training examples in the training set."
      },
      {
        "number": 4,
        "type": "mcq",
        "question": "What is the standard formula for the Mean Squared Error (MSE) cost function J(w,b) used in machine learning?",
        "options": [
          {"letter": "A", "text": "J(w,b) = (1/m) * sum(|f(x) - y|)"},
          {"letter": "B", "text": "J(w,b) = (1/2m) * sum((f(x) - y)^2)"},
          {"letter": "C", "text": "J(w,b) = sum((f(x) - y)^2)"},
          {"letter": "D", "text": "J(w,b) = -sum(y * log(f(x)))"}
        ],
        "answer": "B",
        "explanation": "MSE is the average of squared errors. The factor of 1/2m (rather than 1/m) is used for mathematical convenience during derivative calculations."
      },
      {
        "number": 5,
        "type": "mcq",
        "question": "How does the Gradient Descent algorithm update parameters w and b?",
        "options": [
          {"letter": "A", "text": "By adding the loss value to each parameter"},
          {"letter": "B", "text": "By taking steps in the direction of the positive gradient"},
          {"letter": "C", "text": "By updating parameters simultaneously in the opposite direction of the gradient"},
          {"letter": "D", "text": "By setting the parameters to zero when loss reaches a local maximum"}
        ],
        "answer": "C",
        "explanation": "Gradient descent minimizes the cost function by updating parameters in the opposite direction of the partial derivatives (gradients) of the cost function."
      },
      {
        "number": 6,
        "type": "mcq",
        "question": "What is the role of the learning rate alpha (α) in gradient descent?",
        "options": [
          {"letter": "A", "text": "It determines the final accuracy percentage of the model"},
          {"letter": "B", "text": "It controls the size of the step taken at each iteration towards the minimum"},
          {"letter": "C", "text": "It represents the slope of the cost function at the current parameter value"},
          {"letter": "D", "text": "It measures the size of the training dataset"}
        ],
        "answer": "B",
        "explanation": "The learning rate alpha is a hyperparameter that controls how much we adjust the parameters in each step of gradient descent."
      },
      {
        "number": 7,
        "type": "mcq",
        "question": "What is the potential consequence of choosing a learning rate alpha that is too small?",
        "options": [
          {"letter": "A", "text": "The algorithm will overshoot the minimum and fail to converge"},
          {"letter": "B", "text": "The algorithm will converge very slowly, taking too long to reach the minimum"},
          {"letter": "C", "text": "The model will instantly overfit the training data"},
          {"letter": "D", "text": "The cost function surface will become non-convex"}
        ],
        "answer": "B",
        "explanation": "A very small learning rate results in tiny parameter updates, making the optimization slow and computationally expensive."
      },
      {
        "number": 8,
        "type": "mcq",
        "question": "What can happen if the learning rate alpha is set to a value that is too large?",
        "options": [
          {"letter": "A", "text": "The model will only learn linear patterns"},
          {"letter": "B", "text": "The parameter updates will become exactly zero"},
          {"letter": "C", "text": "Gradient descent may overshoot the minimum, bounce back and forth, and fail to converge or even diverge"},
          {"letter": "D", "text": "It forces the model to ignore the bias parameter b"}
        ],
        "answer": "C",
        "explanation": "If the learning rate is too large, gradient descent can overshoot the minimum, causing the cost to increase or oscillate wildly instead of converging."
      },
      {
        "number": 9,
        "type": "mcq",
        "question": "Why is gradient descent guaranteed to find the global minimum in linear regression models?",
        "options": [
          {"letter": "A", "text": "Because linear regression cost function produces a convex (bowl-shaped) surface with no non-global local minima"},
          {"letter": "B", "text": "Because linear regression does not utilize the bias parameter b"},
          {"letter": "C", "text": "Because the learning rate is automatically set to zero at convergence"},
          {"letter": "D", "text": "Because linear regression uses random restarts automatically"}
        ],
        "answer": "A",
        "explanation": "The MSE loss function for linear regression is mathematically convex. This shape ensures that there is only one minimum, which is the global minimum."
      },
      {
        "number": 10,
        "type": "mcq",
        "question": "In multiple linear regression notation, what does x_j^{(i)} represent?",
        "options": [
          {"letter": "A", "text": "The target label value of training example j"},
          {"letter": "B", "text": "The weight parameter associated with feature i"},
          {"letter": "C", "text": "The value of feature j in the i-th training example"},
          {"letter": "D", "text": "The total number of features in the model"}
        ],
        "answer": "C",
        "explanation": "In standard notation, the superscript (i) denotes the index of the training example, and the subscript j denotes the index of the feature column."
      },
      {
        "number": 11,
        "type": "mcq",
        "question": "What is the primary motivation for performing Feature Scaling in multiple variable models?",
        "options": [
          {"letter": "A", "text": "It converts non-linear variables into linear variables"},
          {"letter": "B", "text": "It standardizes feature ranges, rendering the cost function contours balanced and allowing gradient descent to find the minimum faster"},
          {"letter": "C", "text": "It reduces the number of features in the model"},
          {"letter": "D", "text": "It eliminates the need for calculating the bias parameter b"}
        ],
        "answer": "B",
        "explanation": "When features have wildly different scales, the cost function contours are highly skewed (eccentric ellipses), causing gradient descent to oscillate. Scaling balances the contours, letting gradient descent take a direct path."
      },
      {
        "number": 12,
        "type": "mcq",
        "question": "Which of the following describes Mean Normalization in feature scaling?",
        "options": [
          {"letter": "A", "text": "Dividing each feature value by the maximum value of that feature"},
          {"letter": "B", "text": "Subtracting the mean and dividing by the range (max - min) or standard deviation"},
          {"letter": "C", "text": "Replacing all values in the column with the column mean"},
          {"letter": "D", "text": "Taking the absolute value of all feature columns"}
        ],
        "answer": "B",
        "explanation": "Mean normalization centers the values around zero (giving them a mean of zero) and scales them by the range or standard deviation."
      },
      {
        "number": 13,
        "type": "mcq",
        "question": "What is the main purpose of Polynomial Regression?",
        "options": [
          {"letter": "A", "text": "To fit non-linear curves to data by creating engineered polynomial features from the original inputs"},
          {"letter": "B", "text": "To classify data points into multiple discrete classes"},
          {"letter": "C", "text": "To speed up gradient descent by reducing features"},
          {"letter": "D", "text": "To keep all parameter weights exactly equal to zero"}
        ],
        "answer": "A",
        "explanation": "Polynomial regression fits non-linear relationships by mapping input features to powers (like x^2, x^3) and treating them as additional linear features."
      },
      {
        "number": 14,
        "type": "mcq",
        "question": "Suppose you are building a linear regression model to predict car prices. The features are: age, MSRP, odometer mileage, and gas mileage. How many weights (excluding bias) will be calculated during training?",
        "options": [
          {"letter": "A", "text": "1 weight"},
          {"letter": "B", "text": "4 weights"},
          {"letter": "C", "text": "5 weights"},
          {"letter": "D", "text": "8 weights"}
        ],
        "answer": "B",
        "explanation": "There is exactly one weight calculated for each input feature. Since there are 4 features (age, MSRP, odometer, gas mileage), the model will have 4 weights."
      },
      {
        "number": 15,
        "type": "mcq",
        "question": "What does the term 'Batch' mean in Batch Gradient Descent?",
        "options": [
          {"letter": "A", "text": "Updating weights only after completing all training epochs"},
          {"letter": "B", "text": "Using all training examples to compute gradients in each single parameter update step"},
          {"letter": "C", "text": "Dividing the weights by the total number of features"},
          {"letter": "D", "text": "Updating only one random sample per iteration"}
        ],
        "answer": "B",
        "explanation": "Batch gradient descent looks at the entire training dataset (the whole batch of m examples) before making a single parameter update step."
      },
      {
        "number": 16,
        "type": "essay",
        "question": "Compare Gradient Descent and the Normal Equation for solving linear regression.",
        "modelAnswer": "Gradient Descent is an iterative optimization algorithm that scales well to large datasets with many features, but requires tuning the learning rate and running multiple iterations. The Normal Equation is an analytical approach that solves for weights directly in one mathematical step using matrix inversion. It doesn't require a learning rate or iterations, but it becomes computationally very slow when the number of features is very large.",
        "explanation": "Normal Equation requires calculating the inverse of an (n x n) matrix (O(n^3) time complexity), making Gradient Descent better for datasets with thousands of features."
      },
      {
        "number": 17,
        "type": "essay",
        "question": "Explain the difference between Feature Scaling and Mean Normalization.",
        "modelAnswer": "Feature Scaling involves dividing feature values by the range (or standard deviation) to ensure all features are on a similar scale (e.g., between -1 and 1), which speeds up gradient descent. Mean Normalization goes a step further by subtracting the mean of the feature from every value before scaling, ensuring the resulting data is centered around exactly zero.",
        "explanation": "Both techniques aim to make gradient descent converge faster by creating more spherical contour plots for the cost function."
      }
    ]
  },
  {
    "examId": 1,
    "title": "Exam 2: Logistic Regression, Regularization & Evaluation",
    "questions": [
      {
        "number": 1,
        "type": "mcq",
        "question": "What is the primary function of the Sigmoid (or Logistic) function in Logistic Regression?",
        "options": [
          {"letter": "A", "text": "To multiply the weights by feature values"},
          {"letter": "B", "text": "To map any real-valued number to a value between 0 and 1, representing a probability"},
          {"letter": "C", "text": "To select which features to drop from the model"},
          {"letter": "D", "text": "To increase the training set size"}
        ],
        "answer": "B",
        "explanation": "The sigmoid function σ(z) = 1 / (1 + e^-z) maps outputs to the range [0, 1], which can be interpreted as the probability that a sample belongs to the positive class."
      },
      {
        "number": 2,
        "type": "mcq",
        "question": "Why is the Squared Error cost function NOT used for training Logistic Regression models?",
        "options": [
          {"letter": "A", "text": "Because it always yields negative cost values"},
          {"letter": "B", "text": "Because it results in a non-convex cost surface with multiple local minima, preventing reliable gradient descent"},
          {"letter": "C", "text": "Because squared errors cannot be calculated for probabilities"},
          {"letter": "D", "text": "Because it makes the model compile too fast"}
        ],
        "answer": "B",
        "explanation": "Combining the non-linear sigmoid function with squared error cost results in a non-convex function. Log Loss (Binary Cross-Entropy) is used instead to guarantee a convex loss surface."
      },
      {
        "number": 3,
        "type": "mcq",
        "question": "What is the physical interpretation of the 'Decision Boundary' in logistic regression?",
        "options": [
          {"letter": "A", "text": "The border values of the training dataset"},
          {"letter": "B", "text": "The threshold value (usually 0.5) used to classify probability outputs into discrete binary classes"},
          {"letter": "C", "text": "The maximum rate of convergence"},
          {"letter": "D", "text": "The difference between training error and testing error"}
        ],
        "answer": "B",
        "explanation": "The decision boundary separates the positive class region from the negative class region, determined by applying a threshold (usually 0.5) to the model's output probability."
      },
      {
        "number": 4,
        "type": "mcq",
        "question": "How is 'overfitting' (high variance) characterized in a machine learning model?",
        "options": [
          {"letter": "A", "text": "The model fits the training set extremely well but fails to generalize to new, unseen examples"},
          {"letter": "B", "text": "Both training and testing errors are unacceptably high"},
          {"letter": "C", "text": "The model performs poorly on training data but perfectly on validation data"},
          {"letter": "D", "text": "All weight parameters are set to exactly zero"}
        ],
        "answer": "A",
        "explanation": "Overfitting happens when a model is overly complex and learns training noise instead of general patterns, leading to low training error but high test error."
      },
      {
        "number": 5,
        "type": "mcq",
        "question": "Which of the following is an effective solution to solve the overfitting (high variance) problem?",
        "options": [
          {"letter": "A", "text": "Add more features to the input data"},
          {"letter": "B", "text": "Reduce features, collect more training examples, or apply regularization"},
          {"letter": "C", "text": "Set the regularization parameter lambda to zero"},
          {"letter": "D", "text": "Add polynomial features to the model"}
        ],
        "answer": "B",
        "explanation": "To fix overfitting, you can reduce model complexity (feature selection or regularization) or provide more training examples to help the model generalize."
      },
      {
        "number": 6,
        "type": "mcq",
        "question": "How does Regularization prevent a model from overfitting?",
        "options": [
          {"letter": "A", "text": "By adding a penalty based on weight magnitudes to the cost function, keeping parameters small"},
          {"letter": "B", "text": "By removing the bias parameter b from the calculations"},
          {"letter": "C", "text": "By standardizing features to a zero mean"},
          {"letter": "D", "text": "By multiplying the learning rate alpha by the regularization parameter"}
        ],
        "answer": "A",
        "explanation": "Regularization adds a penalty term (L1 or L2 norm) to the cost function, forcing the optimization to choose smaller weights and preventing high complexity."
      },
      {
        "number": 7,
        "type": "mcq",
        "question": "What is the key mathematical difference between L1 (Lasso) and L2 (Ridge) regularization?",
        "options": [
          {"letter": "A", "text": "L1 adds the sum of squared weights, L2 adds the sum of absolute weights"},
          {"letter": "B", "text": "L1 adds the sum of absolute weights, L2 adds the sum of squared weights"},
          {"letter": "C", "text": "L1 works only for linear regression, L2 works only for logistic regression"},
          {"letter": "D", "text": "L1 does not utilize the lambda parameter"}
        ],
        "answer": "B",
        "explanation": "L1 regularization (Lasso) adds absolute weights (|w|). L2 regularization (Ridge) adds squared weights (w^2)."
      },
      {
        "number": 8,
        "type": "mcq",
        "question": "Why is L1 regularization (Lasso) preferred for automatic feature selection?",
        "options": [
          {"letter": "A", "text": "Because it keeps all weights positive"},
          {"letter": "B", "text": "Because it drives the weights of irrelevant features to exactly zero"},
          {"letter": "C", "text": "Because it is computationally slower than L2"},
          {"letter": "D", "text": "Because it does not penalize large weights"}
        ],
        "answer": "B",
        "explanation": "L1 regularization has a constant penalty gradient (sign(w)) regardless of magnitude. This forces less important feature weights to shrink to exactly 0.0, eliminating them."
      },
      {
        "number": 9,
        "type": "mcq",
        "question": "What is the risk of selecting a regularization parameter lambda (λ) that is too large?",
        "options": [
          {"letter": "A", "text": "The model will fit training data too closely, causing severe overfitting"},
          {"letter": "B", "text": "The model parameters will be overly penalized, causing underfitting (high bias)"},
          {"letter": "C", "text": "The learning rate alpha will become very small"},
          {"letter": "D", "text": "The cost function will lose its convexity"}
        ],
        "answer": "B",
        "explanation": "If lambda is too large, the weight penalty dominates the cost. The optimization shrinks weights near zero, making the model too simple (underfit)."
      },
      {
        "number": 10,
        "type": "mcq",
        "question": "Why is the training set error alone a poor measure of model quality?",
        "options": [
          {"letter": "A", "text": "Because it is always higher than the test error"},
          {"letter": "B", "text": "Because a model can overfit the training data (low training error) but fail to generalize to new data"},
          {"letter": "C", "text": "Because it does not utilize the cost function during calculation"},
          {"letter": "D", "text": "Because it is calculated without weight parameters"}
        ],
        "answer": "B",
        "explanation": "A model can easily memorize the training set, yielding very low training error, yet fail completely on unseen test data."
      },
      {
        "number": 11,
        "type": "mcq",
        "question": "In model selection, what is the role of the Cross-Validation (validation) dataset?",
        "options": [
          {"letter": "A", "text": "To calculate the final parameters w and b"},
          {"letter": "B", "text": "To evaluate candidate models (e.g. choose polynomial degree d or tune lambda) without biasing the test set"},
          {"letter": "C", "text": "To serve as a backup dataset if the training set is lost"},
          {"letter": "D", "text": "To normalize the feature scales"}
        ],
        "answer": "B",
        "explanation": "A validation set is used as a neutral benchmark to compare different models and hyperparameter settings. This preserves the test set purely for the final unbiased performance check."
      },
      {
        "number": 12,
        "type": "mcq",
        "question": "What is the Golden Rule of machine learning regarding testing data?",
        "options": [
          {"letter": "A", "text": "Always normalize testing data together with training data"},
          {"letter": "B", "text": "Never use testing data for training or for making decisions about the model"},
          {"letter": "C", "text": "Test error must be calculated using a regularization term"},
          {"letter": "D", "text": "Testing data should represent 90% of the split"}
        ],
        "answer": "B",
        "explanation": "Using test data to make decisions (like model selection or hyperparameter tuning) leaks test information, leading to overly optimistic results."
      },
      {
        "number": 13,
        "type": "mcq",
        "question": "If a model suffers from high bias (underfitting), what is the relationship between training and validation errors?",
        "options": [
          {"letter": "A", "text": "Training error is low, validation error is high"},
          {"letter": "B", "text": "Both training error and validation error are high"},
          {"letter": "C", "text": "Both training error and validation error are low"},
          {"letter": "D", "text": "Training error is high, validation error is zero"}
        ],
        "answer": "B",
        "explanation": "Underfitting means the model cannot learn the patterns. Therefore, it has poor performance (high error) on both the training set and validation set."
      },
      {
        "number": 14,
        "type": "mcq",
        "question": "If a learning algorithm suffers from high bias, how does getting more training data affect the errors?",
        "options": [
          {"letter": "A", "text": "It will immediately lower the validation error to zero"},
          {"letter": "B", "text": "It will not help much, as the errors flatten out and remain high"},
          {"letter": "C", "text": "It will cause the model to overfit"},
          {"letter": "D", "text": "It reduces the training error significantly"}
        ],
        "answer": "B",
        "explanation": "More data doesn't help an underfitting model because its structure is too simple (e.g. fitting a straight line to quadratic data). The model needs more features or complexity."
      },
      {
        "number": 15,
        "type": "mcq",
        "question": "If a learning algorithm suffers from high variance (overfitting), how does getting more training data affect performance?",
        "options": [
          {"letter": "A", "text": "It makes the overfitting worse"},
          {"letter": "B", "text": "It is likely to help, bringing validation error down closer to training error"},
          {"letter": "C", "text": "It increases the training error to infinity"},
          {"letter": "D", "text": "It eliminates the need for cross-validation"}
        ],
        "answer": "B",
        "explanation": "More data helps an overfitting model because it restricts the model from fitting random noise, forcing it to learn more generalized features."
      },
      {
        "number": 16,
        "type": "essay",
        "question": "Compare L1 (Lasso) and L2 (Ridge) Regularization.",
        "modelAnswer": "L1 Regularization (Lasso) adds a penalty equal to the absolute value of the magnitude of coefficients, which can shrink some weights exactly to zero, effectively performing automatic feature selection. L2 Regularization (Ridge) adds a penalty equal to the square of the magnitude of coefficients, which shrinks weights toward zero but rarely forces them to be exactly zero, keeping all features in the model.",
        "explanation": "L1 produces sparse models, while L2 is better when you expect all features to have some impact."
      },
      {
        "number": 17,
        "type": "essay",
        "question": "Explain the concepts of high bias (underfitting) and high variance (overfitting).",
        "modelAnswer": "High bias (underfitting) occurs when a model is too simple to capture the underlying patterns in the data, resulting in high errors on both the training and validation sets. High variance (overfitting) occurs when a model is too complex and memorizes the training data (including noise), resulting in extremely low training errors but very high validation errors because it fails to generalize to unseen data.",
        "explanation": "The ultimate goal is finding the perfect trade-off between bias and variance to minimize the overall generalization error."
      }
    ]
  },
  {
    "examId": 2,
    "title": "Exam 3: Neural Networks, Trees & Unsupervised Learning",
    "questions": [
      {
        "number": 1,
        "type": "mcq",
        "question": "What is the primary limitation of a single Perceptron?",
        "options": [
          {"letter": "A", "text": "It cannot accept binary inputs"},
          {"letter": "B", "text": "It can only learn linear decision boundaries, failing on non-linearly separable problems like XOR"},
          {"letter": "C", "text": "It doesn't use weights and biases"},
          {"letter": "D", "text": "It can only be used for regression"}
        ],
        "answer": "B",
        "explanation": "Perceptrons are linear classifiers. If the data is not linearly separable, the perceptron learning rule will not converge."
      },
      {
        "number": 2,
        "type": "mcq",
        "question": "Why are non-linear activation functions (like ReLU) used in hidden layers of neural networks?",
        "options": [
          {"letter": "A", "text": "To keep all outputs between -0.5 and 0.5"},
          {"letter": "B", "text": "To introduce non-linearity, allowing the network to learn complex, non-linear mappings"},
          {"letter": "C", "text": "To speed up the network by turning off random neurons"},
          {"letter": "D", "text": "To replace the backpropagation step"}
        ],
        "answer": "B",
        "explanation": "If we don't use non-linear activation functions, the entire network is just a combination of linear operations, which reduces back to a simple linear model."
      },
      {
        "number": 3,
        "type": "mcq",
        "question": "What mathematical rule is the foundation of the Backpropagation algorithm in neural networks?",
        "options": [
          {"letter": "A", "text": "The quotient rule"},
          {"letter": "B", "text": "The chain rule of calculus"},
          {"letter": "C", "text": "L'Hopital's rule"},
          {"letter": "D", "text": "The power rule"}
        ],
        "answer": "B",
        "explanation": "Backpropagation computes the gradient of the loss with respect to weights and biases by applying the chain rule to propagate errors backward from output to input."
      },
      {
        "number": 4,
        "type": "mcq",
        "question": "What is the primary advantage of the Adam Optimization algorithm over standard Gradient Descent?",
        "options": [
          {"letter": "A", "text": "It does not calculate any gradients"},
          {"letter": "B", "text": "It computes adaptive learning rates for each parameter dynamically, yielding faster and more robust convergence"},
          {"letter": "C", "text": "It only runs for a single epoch"},
          {"letter": "D", "text": "It eliminates the need for activation functions"}
        ],
        "answer": "B",
        "explanation": "Adam (Adaptive Moment Estimation) dynamically adjusts the learning rate for each individual weight based on moving averages of the gradients, making it faster and more stable."
      },
      {
        "number": 5,
        "type": "mcq",
        "question": "What does Entropy measure in Decision Tree algorithms?",
        "options": [
          {"letter": "A", "text": "The depth of the decision tree"},
          {"letter": "B", "text": "The number of split points possible"},
          {"letter": "C", "text": "The impurity, disorder, or uncertainty in a given dataset"},
          {"letter": "D", "text": "The average value of continuous features"}
        ],
        "answer": "C",
        "explanation": "Entropy measures the disorder of a set. In classification, a node containing only one class has 0 entropy (pure), while a node with evenly split classes has high entropy (impure)."
      },
      {
        "number": 6,
        "type": "mcq",
        "question": "How is Information Gain defined in decision tree construction?",
        "options": [
          {"letter": "A", "text": "The entropy of the parent node minus the weighted average of the child nodes' entropies"},
          {"letter": "B", "text": "The total number of correctly classified samples in the leaf nodes"},
          {"letter": "C", "text": "The ratio of parent entropy to child entropy"},
          {"letter": "D", "text": "The sum of entropies after the split"}
        ],
        "answer": "A",
        "explanation": "Information Gain measures the reduction in entropy (uncertainty) achieved by splitting the dataset on a specific attribute."
      },
      {
        "number": 7,
        "type": "mcq",
        "question": "How does the ID3 decision tree algorithm decide which attribute to split on at each node?",
        "options": [
          {"letter": "A", "text": "It chooses a random attribute"},
          {"letter": "B", "text": "It selects the attribute that yields the maximum Information Gain"},
          {"letter": "C", "text": "It selects the attribute with the highest value range"},
          {"letter": "D", "text": "It splits on the feature with the lowest entropy"}
        ],
        "answer": "B",
        "explanation": "ID3 is a greedy algorithm that selects the attribute that best splits the current dataset (yielding the highest Information Gain / largest reduction in entropy)."
      },
      {
        "number": 8,
        "type": "mcq",
        "question": "How does a Regression Decision Tree determine the output value at a leaf node?",
        "options": [
          {"letter": "A", "text": "By calculating the weighted sum of features"},
          {"letter": "B", "text": "By taking the average of the target values of the training samples in that leaf node"},
          {"letter": "C", "text": "By using the majority vote of the categories"},
          {"letter": "D", "text": "By outputting a randomized value between the min and max"}
        ],
        "answer": "B",
        "explanation": "In a regression tree, each leaf node represents a region of continuous values. The prediction for a sample falling into that leaf is the mean (average) target value of the training samples inside that leaf."
      },
      {
        "number": 9,
        "type": "mcq",
        "question": "What is the key mechanism used in Random Forest to build diverse and independent trees?",
        "options": [
          {"letter": "A", "text": "Using a single stump with a large lambda"},
          {"letter": "B", "text": "Bootstrap sampling (bagging) and random feature selection at each split"},
          {"letter": "C", "text": "Training trees sequentially to correct previous errors"},
          {"letter": "D", "text": "Normalizing the weights using Softmax"}
        ],
        "answer": "B",
        "explanation": "Random Forest builds a collection of trees. It ensures diversity by training each tree on a random sample with replacement (bootstrap) and only allowing each split to select from a random subset of features."
      },
      {
        "number": 10,
        "type": "mcq",
        "question": "How does Boosting (like AdaBoost) differ from bagging/Random Forest?",
        "options": [
          {"letter": "A", "text": "Boosting trains trees in parallel, while Random Forest trains them sequentially"},
          {"letter": "B", "text": "Boosting trains trees sequentially, adjusting weights of training examples to focus on those misclassified by previous trees"},
          {"letter": "C", "text": "Boosting does not support classification tasks"},
          {"letter": "D", "text": "Boosting uses bootstrap samples with replacement for every tree"}
        ],
        "answer": "B",
        "explanation": "Bagging (Random Forest) grows trees independently in parallel. Boosting grows trees sequentially, where each new tree is designed to fix the errors of the preceding trees."
      },
      {
        "number": 11,
        "type": "mcq",
        "question": "Which clustering approach describes the K-Means algorithm?",
        "options": [
          {"letter": "A", "text": "Density-based clustering"},
          {"letter": "B", "text": "Centroid-based clustering"},
          {"letter": "C", "text": "Distribution-based clustering"},
          {"letter": "D", "text": "Hierarchical clustering"}
        ],
        "answer": "B",
        "explanation": "K-Means is centroid-based. It groups data points into non-hierarchical clusters by minimizing the distances from points to their assigned cluster centers (centroids)."
      },
      {
        "number": 12,
        "type": "mcq",
        "question": "How does the Elbow Method help select the number of clusters K in K-Means?",
        "options": [
          {"letter": "A", "text": "By plotting WCSS (within-cluster sum of squares) against K and identifying the point where the rate of decrease slows down significantly"},
          {"letter": "B", "text": "By finding where the training error reaches exactly zero"},
          {"letter": "C", "text": "By measuring the projection error of PCA"},
          {"letter": "D", "text": "By choosing K where the centroids do not move during initialization"}
        ],
        "answer": "A",
        "explanation": "Plotting WCSS against K usually shows a rapid decrease that flattens out. The 'elbow' is the point of inflection, representing the optimal trade-off between the number of clusters and variance."
      },
      {
        "number": 13,
        "type": "mcq",
        "question": "In which scenario is Anomaly Detection preferred over standard Supervised Learning?",
        "options": [
          {"letter": "A", "text": "When you have an equal number of positive and negative classes"},
          {"letter": "B", "text": "When the positive class (anomalies) is extremely rare (0-20 examples) and future anomalies could look completely different from past ones"},
          {"letter": "C", "text": "When you want to perform regression to predict house prices"},
          {"letter": "D", "text": "When the target output is a continuous scale of numbers"}
        ],
        "answer": "B",
        "explanation": "Supervised classifiers need many positive examples to learn what the positive class looks like. Anomaly detection models the normal class instead, flagging anything that deviates significantly."
      },
      {
        "number": 14,
        "type": "mcq",
        "question": "What is the primary goal of Principal Component Analysis (PCA)?",
        "options": [
          {"letter": "A", "text": "To fit a line that minimizes vertical squared distances to target labels"},
          {"letter": "B", "text": "To project high-dimensional data onto a lower-dimensional surface while minimizing the squared orthogonal projection error"},
          {"letter": "C", "text": "To determine the optimal splitting thresholds for continuous attributes"},
          {"letter": "D", "text": "To classify data points into K clusters"}
        ],
        "answer": "B",
        "explanation": "PCA is a dimensionality reduction algorithm. It projects data onto a lower-dimensional space, choosing components that minimize the sum of squared distances from the points to their projections."
      },
      {
        "number": 15,
        "type": "mcq",
        "question": "What preprocessing steps are mandatory before running Principal Component Analysis (PCA)?",
        "options": [
          {"letter": "A", "text": "One-hot encoding of all target labels"},
          {"letter": "B", "text": "Mean normalization (centering data around zero) and feature scaling"},
          {"letter": "C", "text": "Calculating baseline performance level"},
          {"letter": "D", "text": "Pruning decision tree branches"}
        ],
        "answer": "B",
        "explanation": "PCA is sensitive to feature scales and means. Performing mean normalization (mean=0) and feature scaling ensures that features with large ranges do not dominate the principal component directions."
      },
      {
        "number": 16,
        "type": "essay",
        "question": "Compare Decision Trees and Random Forests.",
        "modelAnswer": "A Decision Tree is a single model that splits data based on feature conditions to make predictions; it is highly interpretable but very prone to overfitting (high variance). A Random Forest is an ensemble learning method that builds multiple decision trees on random subsets of data and features, then averages their predictions. This significantly reduces overfitting and improves accuracy, though it sacrifices the easy interpretability of a single tree.",
        "explanation": "Random Forests use a technique called bagging (Bootstrap Aggregating) combined with random feature selection to ensure individual trees are uncorrelated."
      },
      {
        "number": 17,
        "type": "essay",
        "question": "Explain how the K-Means clustering algorithm works step-by-step.",
        "modelAnswer": "K-Means works through an iterative process: \n1. Initialization: Randomly select K points as the initial cluster centroids.\n2. Assignment: Calculate the distance from each data point to all centroids, and assign each point to the closest centroid.\n3. Update: Calculate the new mean of all points assigned to each cluster and move the centroid to this new mean.\n4. Repeat: Steps 2 and 3 are repeated until the centroids stop moving (convergence).",
        "explanation": "K-Means is sensitive to the initial random placement of centroids, so it's typically run multiple times (random restarts) to find the global minimum."
      }
    ]
  },
  {
    "examId": "quiz-1",
    "title": "Lec 1 Quiz: Introduction to Machine Learning",
    "questions": [
      {
        "number": 1,
        "type": "mcq",
        "question": "What is the subset of artificial intelligence (AI) focused on algorithms that can learn the patterns of training data and make accurate inferences about new data?",
        "options": [
          {"letter": "A", "text": "Automated reasoning"},
          {"letter": "B", "text": "Machine learning"},
          {"letter": "C", "text": "Heuristic search"},
          {"letter": "D", "text": "Expert systems"}
        ],
        "answer": "B",
        "explanation": "Machine learning is a subfield of AI that uses algorithms trained on data sets to build models capable of performing tasks without being explicitly programmed."
      },
      {
        "number": 2,
        "type": "mcq",
        "question": "How does Machine Learning differ from traditional Statistics according to the lecture slides?",
        "options": [
          {"letter": "A", "text": "Statistics does not model data in any way"},
          {"letter": "B", "text": "Statistics aims to get at the truth, whereas machine learning tries to come up with something that works"},
          {"letter": "C", "text": "Machine learning was invented before statistics"},
          {"letter": "D", "text": "Machine learning only works on qualitative data"}
        ],
        "answer": "B",
        "explanation": "While both analyze and model data, statistics aims to uncover the underlying truth/experiment design, while machine learning is highly engineering-focused, optimizing for what works."
      },
      {
        "number": 3,
        "type": "mcq",
        "question": "In supervised learning, what constitutes the training dataset?",
        "options": [
          {"letter": "A", "text": "Only unlabelled inputs"},
          {"letter": "B", "text": "Only correct target labels"},
          {"letter": "C", "text": "Input samples combined with correct output labels"},
          {"letter": "D", "text": "Agent rewards and environments"}
        ],
        "answer": "C",
        "explanation": "Supervised learning trains a model using input samples and their corresponding correct ground-truth outputs (labels)."
      },
      {
        "number": 4,
        "type": "mcq",
        "question": "Which machine learning paradigm involves an agent navigating an environment using a system of rewards and punishments to reach its goal?",
        "options": [
          {"letter": "A", "text": "Supervised learning"},
          {"letter": "B", "text": "Unsupervised learning"},
          {"letter": "C", "text": "Reinforcement learning"},
          {"letter": "D", "text": "Generative models"}
        ],
        "answer": "C",
        "explanation": "Reinforcement learning does not require pre-given data; it utilizes an agent, an environment, and a scoring system of rewards/punishments to learn optimal behaviors."
      },
      {
        "number": 5,
        "type": "mcq",
        "question": "Which of the following is a classic application of Unsupervised Learning?",
        "options": [
          {"letter": "A", "text": "Spam email classification"},
          {"letter": "B", "text": "Predicting future stock prices"},
          {"letter": "C", "text": "Customer segmentation in marketing via clustering"},
          {"letter": "D", "text": "Training a robot to dance using rewards"}
        ],
        "answer": "C",
        "explanation": "Unsupervised learning works on unlabeled data. Customer segmentation is a classic example of grouping customers by similarities using clustering."
      }
    ]
  },
  {
    "examId": "quiz-2",
    "title": "Lec 2 Quiz: Linear Regression & Cost Function",
    "questions": [
      {
        "number": 1,
        "type": "mcq",
        "question": "In the univariate linear regression model function f(x) = wx + b, what do the parameters w and b represent?",
        "options": [
          {"letter": "A", "text": "w is the weight/slope, b is the bias/y-intercept"},
          {"letter": "B", "text": "w is the bias/y-intercept, b is the weight/slope"},
          {"letter": "C", "text": "w is the learning rate, b is the cost value"},
          {"letter": "D", "text": "w is the input feature, b is the target prediction"}
        ],
        "answer": "A",
        "explanation": "In machine learning notation, w is the weight (representing the slope of the line) and b is the bias (representing the y-intercept)."
      },
      {
        "number": 2,
        "type": "mcq",
        "question": "What is the purpose of the Cost Function (also called Loss Function) in regression?",
        "options": [
          {"letter": "A", "text": "To multiply the features by constant values"},
          {"letter": "B", "text": "To measure how well the predicted values match the actual target values and guide optimization"},
          {"letter": "C", "text": "To count the number of features in the dataset"},
          {"letter": "D", "text": "To split the training set into training and validation folds"}
        ],
        "answer": "B",
        "explanation": "The cost function measures model error. Minimizing it optimizes the parameters w and b to make the predictions as close to the target values as possible."
      },
      {
        "number": 3,
        "type": "mcq",
        "question": "Why is the average error (like Mean Squared Error) preferred over the sum of squared errors in real-life datasets?",
        "options": [
          {"letter": "A", "text": "Because averages are easier for computers to multiply"},
          {"letter": "B", "text": "Because sum of errors scales with dataset size, making comparisons between different-sized datasets invalid"},
          {"letter": "C", "text": "Because averages do not handle negative numbers"},
          {"letter": "D", "text": "Because sum of errors is always zero"}
        ],
        "answer": "B",
        "explanation": "A sum-of-squares error naturally grows with the number of data points. Using an average normalizes the error, enabling a fair comparison across datasets of different sizes."
      },
      {
        "number": 4,
        "type": "mcq",
        "question": "Why is the constant factor 1/2 added to the Mean Squared Error (MSE) cost function J(w,b) in machine learning?",
        "options": [
          {"letter": "A", "text": "To reduce the final cost value by half"},
          {"letter": "B", "text": "For mathematical convenience, so that the 2 cancels out when taking the partial derivative"},
          {"letter": "C", "text": "To prevent dividing by zero when dataset is empty"},
          {"letter": "D", "text": "To scale the feature values to a standard range"}
        ],
        "answer": "B",
        "explanation": "When taking the derivative of the squared term (z^2), a factor of 2 is generated. The 1/2 factor cancels this out, making the derivative math cleaner."
      },
      {
        "number": 5,
        "type": "mcq",
        "question": "If you are using a single-feature regression problem, the cost function maps every point in the ______ space to a loss value.",
        "options": [
          {"letter": "A", "text": "Feature"},
          {"letter": "B", "text": "Model"},
          {"letter": "C", "text": "Input"},
          {"letter": "D", "text": "Instance"}
        ],
        "answer": "B",
        "explanation": "As stated in the slides, the cost function maps every point (combination of parameters w and b) in the model space to a loss value."
      }
    ]
  },
  {
    "examId": "quiz-3",
    "title": "Lec 3 Quiz: Gradient Descent Optimization",
    "questions": [
      {
        "number": 1,
        "type": "mcq",
        "question": "How does Gradient Descent update the parameters w and b during model training?",
        "options": [
          {"letter": "A", "text": "By adding random numbers to them at each iteration"},
          {"letter": "B", "text": "By moving them in the opposite direction of the gradient (derivative) of the cost function"},
          {"letter": "C", "text": "By setting them to zero whenever the loss increases"},
          {"letter": "D", "text": "By keeping them constant and changing the training dataset"}
        ],
        "answer": "B",
        "explanation": "Gradient descent is a first-order optimization algorithm that updates parameters in the opposite direction of the gradient to find the local minimum."
      },
      {
        "number": 2,
        "type": "mcq",
        "question": "What is the physical interpretation of the weight update if the slope of the cost function is negative?",
        "options": [
          {"letter": "A", "text": "The weight w decreases"},
          {"letter": "B", "text": "The weight w remains unchanged"},
          {"letter": "C", "text": "The weight w increases (moves right)"},
          {"letter": "D", "text": "The learning rate becomes negative"}
        ],
        "answer": "C",
        "explanation": "If the slope is negative, subtracting the negative derivative term (multiplied by learning rate) results in adding a positive value, increasing w (moving right)."
      },
      {
        "number": 3,
        "type": "mcq",
        "question": "What is the risk of choosing a learning rate (alpha) that is too large?",
        "options": [
          {"letter": "A", "text": "The algorithm will take extremely small steps and run too slowly"},
          {"letter": "B", "text": "The model will automatically switch to unsupervised learning"},
          {"letter": "C", "text": "The algorithm may overshoot the minimum, fail to converge, or even diverge"},
          {"letter": "D", "text": "The weights will be set to exactly zero"}
        ],
        "answer": "C",
        "explanation": "A very large learning rate causes the updates to overshoot the minimum, leading to oscillation, failure to converge, or divergence."
      },
      {
        "number": 4,
        "type": "mcq",
        "question": "Why is gradient descent guaranteed to find the global minimum for linear regression models?",
        "options": [
          {"letter": "A", "text": "Because linear regression models have non-differentiable cost functions"},
          {"letter": "B", "text": "Because the loss function always produces a convex (bowl-like) surface with a single minimum"},
          {"letter": "C", "text": "Because linear regression models use random restarts automatically"},
          {"letter": "D", "text": "Because learning rates are automatically adjusted to zero"}
        ],
        "answer": "B",
        "explanation": "Convex surfaces have only one minimum, which is the global minimum. Therefore, any convergence path of gradient descent lands on the global minimum."
      },
      {
        "number": 5,
        "type": "mcq",
        "question": "In gradient descent, what does the term 'Batch' refer to?",
        "options": [
          {"letter": "A", "text": "The number of parameters updated at once"},
          {"letter": "B", "text": "The practice of using all training examples in each single step of gradient descent"},
          {"letter": "C", "text": "Splitting the data into training and validation sets"},
          {"letter": "D", "text": "The number of epochs completed in a minute"}
        ],
        "answer": "B",
        "explanation": "Batch gradient descent means that the algorithm calculates the gradients and updates weights based on the entire training set (all m examples) in every single step."
      }
    ]
  },
  {
    "examId": "quiz-4",
    "title": "Lec 4 Quiz: Multiple Variables, Scaling & Polynomial Regression",
    "questions": [
      {
        "number": 1,
        "type": "mcq",
        "question": "Suppose you are building a linear regression model with 4 independent features. How many weights (excluding bias) will be calculated during training?",
        "options": [
          {"letter": "A", "text": "1 weight"},
          {"letter": "B", "text": "4 weights"},
          {"letter": "C", "text": "5 weights"},
          {"letter": "D", "text": "8 weights"}
        ],
        "answer": "B",
        "explanation": "A linear regression model with n features has exactly n weights (one for each feature) plus 1 bias parameter."
      },
      {
        "number": 2,
        "type": "mcq",
        "question": "Why is Feature Scaling crucial when training multiple linear regression with gradient descent?",
        "options": [
          {"letter": "A", "text": "It converts non-linear features into linear ones"},
          {"letter": "B", "text": "It standardizes the feature ranges so gradient descent can find a direct path and converge faster"},
          {"letter": "C", "text": "It eliminates the need for calculating the bias parameter"},
          {"letter": "D", "text": "It automatically removes outliers from the dataset"}
        ],
        "answer": "B",
        "explanation": "Without scaling, features with very large ranges dominate the updates and result in highly skewed, thin contours, making gradient descent oscillate and take much longer to converge."
      },
      {
        "number": 3,
        "type": "mcq",
        "question": "Which of the following describes Mean Normalization in feature scaling?",
        "options": [
          {"letter": "A", "text": "Dividing each value by the largest value in the column"},
          {"letter": "B", "text": "Subtracting the mean and dividing by the range (max - min) or standard deviation"},
          {"letter": "C", "text": "Setting all negative values in the column to zero"},
          {"letter": "D", "text": "Taking the square root of all feature values"}
        ],
        "answer": "B",
        "explanation": "Mean normalization scales features to a similar range (typically between -0.5 and 0.5) by adjusting each feature value around its average."
      },
      {
        "number": 4,
        "type": "mcq",
        "question": "When should you use Polynomial Regression instead of simple Linear Regression?",
        "options": [
          {"letter": "A", "text": "When the relationship between input features and target output is non-linear"},
          {"letter": "B", "text": "Only when you have a small number of features"},
          {"letter": "C", "text": "When you want to guarantee that weights are exactly zero"},
          {"letter": "D", "text": "When the target output is binary"}
        ],
        "answer": "A",
        "explanation": "If a linear model underfits the data due to non-linear patterns, polynomial regression uses engineered features (like x^2, x^3) to fit curved boundaries."
      },
      {
        "number": 5,
        "type": "mcq",
        "question": "To overcome local minima stuck issues during gradient descent for complex models, which technique is recommended in the slides?",
        "options": [
          {"letter": "A", "text": "Using a smaller dataset"},
          {"letter": "B", "text": "Random restart: running gradient descent multiple times starting from different random points"},
          {"letter": "C", "text": "Increasing the learning rate exponentially"},
          {"letter": "D", "text": "Turning off the bias update"}
        ],
        "answer": "B",
        "explanation": "Random restart involves training the model multiple times with different initial weights. The run with the overall minimum error is then chosen."
      }
    ]
  },
  {
    "examId": "quiz-5",
    "title": "Lec 5 Quiz: Logistic Regression & Decision Boundary",
    "questions": [
      {
        "number": 1,
        "type": "mcq",
        "question": "What is the primary purpose of Logistic Regression?",
        "options": [
          {"letter": "A", "text": "To fit a straight line to predict continuous numeric values"},
          {"letter": "B", "text": "To estimate the probability that a set of inputs belongs to one of two binary classes"},
          {"letter": "C", "text": "To perform unsupervised clustering without labels"},
          {"letter": "D", "text": "To reduce the dimensionality of the features space"}
        ],
        "answer": "B",
        "explanation": "Logistic regression is a classification model that maps input features to a probability value between 0 and 1, used for binary classification."
      },
      {
        "number": 2,
        "type": "mcq",
        "question": "Which function is applied to the linear combination of features in logistic regression to bound the output between 0 and 1?",
        "options": [
          {"letter": "A", "text": "Rectified Linear Unit (ReLU)"},
          {"letter": "B", "text": "Sigmoid (or Logistic) function"},
          {"letter": "C", "text": "Cosine distance function"},
          {"letter": "D", "text": "Exponential function"}
        ],
        "answer": "B",
        "explanation": "The sigmoid function σ(z) = 1 / (1 + e^-z) maps any real-valued input to a value between 0 and 1."
      },
      {
        "number": 3,
        "type": "mcq",
        "question": "Why is Mean Squared Error (MSE) NOT suitable for training Logistic Regression models?",
        "options": [
          {"letter": "A", "text": "It makes the model computationally too fast"},
          {"letter": "B", "text": "It yields a non-convex cost function with multiple local minima, causing gradient descent to get stuck"},
          {"letter": "C", "text": "It can only be calculated for single-variable problems"},
          {"letter": "D", "text": "It leads to negative probability outputs"}
        ],
        "answer": "B",
        "explanation": "Applying MSE to the sigmoid function results in a non-convex surface. Log Loss (Binary Cross-Entropy) is used instead to ensure convexity."
      },
      {
        "number": 4,
        "type": "mcq",
        "question": "What represents the 'Decision Boundary' in a logistic regression model?",
        "options": [
          {"letter": "A", "text": "The minimum cost value reached during training"},
          {"letter": "B", "text": "The threshold value (typically 0.5) used to classify probability outputs into discrete binary classes"},
          {"letter": "C", "text": "The maximum number of iterations allowed"},
          {"letter": "D", "text": "The sum of vertical distances from the points to the curve"}
        ],
        "answer": "B",
        "explanation": "The decision boundary is the line/plane separating the positive and negative class regions, determined by applying a threshold (usually 0.5) to the model's output probability."
      },
      {
        "number": 5,
        "type": "mcq",
        "question": "Based on the types of models discussed, Logistic Regression is classified as a _______ model.",
        "options": [
          {"letter": "A", "text": "Logical"},
          {"letter": "B", "text": "Geometric"},
          {"letter": "C", "text": "Probabilistic"},
          {"letter": "D", "text": "Decision Tree"}
        ],
        "answer": "C",
        "explanation": "Logistic regression is a probabilistic model because it calculates the probability that an instance belongs to a positive class."
      }
    ]
  },
  {
    "examId": "quiz-6",
    "title": "Lec 6 Quiz: Regularization",
    "questions": [
      {
        "number": 1,
        "type": "mcq",
        "question": "How is 'overfitting' (high variance) characterized in a machine learning model?",
        "options": [
          {"letter": "A", "text": "Both training and testing errors are unacceptably high"},
          {"letter": "B", "text": "The model performs poorly on the training set but perfectly on the test set"},
          {"letter": "C", "text": "The model fits the training set extremely well but fails to generalize to new, unseen examples"},
          {"letter": "D", "text": "The weights are all set to exactly zero"}
        ],
        "answer": "C",
        "explanation": "Overfitting happens when a model is too complex, fitting noise in the training set instead of the underlying patterns, leading to high testing errors."
      },
      {
        "number": 2,
        "type": "mcq",
        "question": "How does Regularization resolve the overfitting problem?",
        "options": [
          {"letter": "A", "text": "By adding more features to the model automatically"},
          {"letter": "B", "text": "By adding a penalty for complexity (based on weight magnitudes) to the cost function to shrink parameter sizes"},
          {"letter": "C", "text": "By increasing the learning rate alpha during training"},
          {"letter": "D", "text": "By ignoring the labels in the training set"}
        ],
        "answer": "B",
        "explanation": "Regularization modifies the cost function to penalize large weights, keeping the model simpler and preventing parameters from oscillating wildly."
      },
      {
        "number": 3,
        "type": "mcq",
        "question": "What is the key characteristic of L1 Regularization (Lasso Regression)?",
        "options": [
          {"letter": "A", "text": "It adds a penalty proportional to the squares of the coefficients"},
          {"letter": "B", "text": "It tends to turn some coefficients into exactly zero, making it ideal for automatic feature selection"},
          {"letter": "C", "text": "It has no regularization parameter lambda"},
          {"letter": "D", "text": "It increases weight magnitudes as weights approach zero"}
        ],
        "answer": "B",
        "explanation": "L1 regularization adds the absolute values of weights to the cost. Since its penalty gradient is constant (using sign(w)), it drives weights to exactly 0.0."
      },
      {
        "number": 4,
        "type": "mcq",
        "question": "What is the main property of L2 Regularization (Ridge Regression)?",
        "options": [
          {"letter": "A", "text": "It drives weights to exactly zero very quickly"},
          {"letter": "B", "text": "It shrinks all coefficients to small values but rarely sets them to exactly zero, maintaining correlated features"},
          {"letter": "C", "text": "It uses the absolute values of the coefficients as a penalty"},
          {"letter": "D", "text": "It works only for single-feature models"}
        ],
        "answer": "B",
        "explanation": "L2 regularization adds the squared weights. Its shrinkage factor is multiplicative, meaning the penalty decreases as the weight gets closer to zero, so it rarely sets weights to zero."
      },
      {
        "number": 5,
        "type": "mcq",
        "question": "What happens if the regularization parameter lambda is set to an extremely large value?",
        "options": [
          {"letter": "A", "text": "The model will overfit the training data severely"},
          {"letter": "B", "text": "The model will underfit the data (high bias) as parameters are shrunk too close to zero"},
          {"letter": "C", "text": "The learning rate alpha will become very large"},
          {"letter": "D", "text": "The training error will drop to zero"}
        ],
        "answer": "B",
        "explanation": "An extremely large lambda over-penalizes the weights, forcing them near zero. The model essentially becomes a constant line (underfitting)."
      }
    ]
  },
  {
    "examId": "quiz-7",
    "title": "Lec 7 Quiz: Model Evaluation & Model Selection",
    "questions": [
      {
        "number": 1,
        "type": "mcq",
        "question": "Why is the training set error a poor predictor of how well a model will perform on new examples?",
        "options": [
          {"letter": "A", "text": "Because the training set is always too small"},
          {"letter": "B", "text": "Because the training error does not use a loss function"},
          {"letter": "C", "text": "Because a model can overfit the training data, achieving low training error but failing to generalize"},
          {"letter": "D", "text": "Because training error is always high"}
        ],
        "answer": "C",
        "explanation": "A model can memorize noise in the training set (overfitting) and show 0 training error, yet fail completely on new, unseen data."
      },
      {
        "number": 2,
        "type": "mcq",
        "question": "Why is a three-way split (Train / Validation / Test) preferred over a two-way split when tuning hyperparameters?",
        "options": [
          {"letter": "A", "text": "To make training three times faster"},
          {"letter": "B", "text": "To prevent leakage of testing data into the model selection decisions"},
          {"letter": "C", "text": "Because validation data is not used for model evaluation"},
          {"letter": "D", "text": "To eliminate the need for training set"}
        ],
        "answer": "B",
        "explanation": "If we use the test set to choose hyperparameters (e.g. polynomial degree), we are essentially training them on the test set. A validation set is used for decisions, keeping the test set unbiased."
      },
      {
        "number": 3,
        "type": "mcq",
        "question": "If a learning algorithm is suffering from high bias (underfitting), how do the training and validation errors behave?",
        "options": [
          {"letter": "A", "text": "Training error is low; validation error is extremely high"},
          {"letter": "B", "text": "Both training error and validation/cross-validation error are high"},
          {"letter": "C", "text": "Both training error and validation/cross-validation error are near zero"},
          {"letter": "D", "text": "Training error is high; validation error is zero"}
        ],
        "answer": "B",
        "explanation": "High bias means the model is too simple. It cannot fit the training set well (high training error) and naturally performs poorly on unseen data (high validation error)."
      },
      {
        "number": 4,
        "type": "mcq",
        "question": "If an algorithm is suffering from high bias (underfitting), what is the effect of collecting more training examples?",
        "options": [
          {"letter": "A", "text": "It will significantly decrease the cross-validation error"},
          {"letter": "B", "text": "It will not help much, as the model is structurally too simple to capture the patterns"},
          {"letter": "C", "text": "It will immediately solve the problem and lower both errors to zero"},
          {"letter": "D", "text": "It will cause the weights to explode to infinity"}
        ],
        "answer": "B",
        "explanation": "For underfitting models, the learning curves show that training and validation errors flatten out and remain high even with more data. A more complex model is needed."
      },
      {
        "number": 5,
        "type": "mcq",
        "question": "If a model suffers from high variance (overfitting), which of the following debugging steps should you try?",
        "options": [
          {"letter": "A", "text": "Get more training examples, reduce the number of features, or increase lambda"},
          {"letter": "B", "text": "Decrease lambda, add more features, or add polynomial features"},
          {"letter": "C", "text": "Increase the learning rate alpha and turn off regularization"},
          {"letter": "D", "text": "Use the test set to retrain the parameters w and b"}
        ],
        "answer": "A",
        "explanation": "To combat high variance (overfitting), we can simplify the model by reducing features, increasing regularization (lambda), or getting more data to help it generalize."
      }
    ]
  },
  {
    "examId": "quiz-8",
    "title": "Lec 8 Quiz: Artificial Neural Networks",
    "questions": [
      {
        "number": 1,
        "type": "mcq",
        "question": "What is the primary limitation of a single Perceptron as stated in the slides?",
        "options": [
          {"letter": "A", "text": "It cannot handle continuous-valued features"},
          {"letter": "B", "text": "It only works when there is a single weight"},
          {"letter": "C", "text": "It can only learn a linear decision boundary and requires linearly separable data to converge"},
          {"letter": "D", "text": "It cannot use gradient descent updates"}
        ],
        "answer": "C",
        "explanation": "Perceptrons can only solve linearly separable problems. Non-separable problems (like XOR) require multilayer perceptrons (hidden layers)."
      },
      {
        "number": 2,
        "type": "mcq",
        "question": "Why are non-linear activation functions (e.g., ReLU, Sigmoid) crucial in hidden layers of neural networks?",
        "options": [
          {"letter": "A", "text": "To keep all parameter values exactly equal to zero"},
          {"letter": "B", "text": "To introduce non-linearity, enabling the network to learn complex, non-linear decision boundaries"},
          {"letter": "C", "text": "To speed up the forward pass by replacing multiplications with additions"},
          {"letter": "D", "text": "To convert the labels into probabilities"}
        ],
        "answer": "B",
        "explanation": "Without non-linear activation functions, a neural network is just a composition of linear functions, which behaves like a simple linear model, losing deep learning's power."
      },
      {
        "number": 3,
        "type": "mcq",
        "question": "What is the role of Backpropagation in neural network training?",
        "options": [
          {"letter": "A", "text": "To initialize the weights randomly within a [-0.5, 0.5] range"},
          {"letter": "B", "text": "To calculate predictions by passing input values forward through layers"},
          {"letter": "C", "text": "To compute the gradients of the loss function with respect to all weights and biases using the chain rule"},
          {"letter": "D", "text": "To average predictions across a batch of inputs"}
        ],
        "answer": "C",
        "explanation": "Backpropagation runs backwards through the network to calculate partial derivatives (gradients) of the error for all parameters, setting up the gradient descent step."
      },
      {
        "number": 4,
        "type": "mcq",
        "question": "Which activation function is preferred in the output layer for multi-class classification tasks?",
        "options": [
          {"letter": "A", "text": "Rectified Linear Unit (ReLU)"},
          {"letter": "B", "text": "Sigmoid function"},
          {"letter": "C", "text": "Softmax function"},
          {"letter": "D", "text": "Linear activation function"}
        ],
        "answer": "C",
        "explanation": "Softmax regression normalizes the output activations of the network into a probability distribution over multiple mutually exclusive classes."
      },
      {
        "number": 5,
        "type": "mcq",
        "question": "Why is the Adam Optimizer frequently preferred over standard gradient descent in modern deep learning?",
        "options": [
          {"letter": "A", "text": "Because it doesn't calculate gradients during training"},
          {"letter": "B", "text": "Because it automatically adjusts the learning rate dynamically for each parameter, resulting in faster and more stable convergence"},
          {"letter": "C", "text": "Because it only uses a single training example for all iterations"},
          {"letter": "D", "text": "Because it guarantees zero training loss in one epoch"}
        ],
        "answer": "B",
        "explanation": "Adam (Adaptive Moment Estimation) dynamically tunes individual parameter learning rates based on first and second moments of the gradients, outperforming fixed-rate gradient descent."
      }
    ]
  },
  {
    "examId": "quiz-9",
    "title": "Lec 9 Quiz: Decision Trees & Ensemble Learning",
    "questions": [
      {
        "number": 1,
        "type": "mcq",
        "question": "In decision tree algorithms, what does Entropy measure?",
        "options": [
          {"letter": "A", "text": "The depth of the decision tree"},
          {"letter": "B", "text": "The reduction in variance of continuous variables"},
          {"letter": "C", "text": "The impurity, disorder, or uncertainty within a subset of data"},
          {"letter": "D", "text": "The number of decision nodes in a tree"}
        ],
        "answer": "C",
        "explanation": "Entropy is a thermodynamic-derived metric that quantifies the randomness/impurity of data. A pure node has an entropy of 0."
      },
      {
        "number": 2,
        "type": "mcq",
        "question": "How is Information Gain calculated for a potential split in a decision tree?",
        "options": [
          {"letter": "A", "text": "Entropy before the split minus the weighted average entropy after the split"},
          {"letter": "B", "text": "The sum of entropies of all child nodes"},
          {"letter": "C", "text": "The percentage of correct predictions in the leaf nodes"},
          {"letter": "D", "text": "Dividing the parent entropy by the child entropy"}
        ],
        "answer": "A",
        "explanation": "Information Gain measures the reduction in uncertainty. It subtracts the expected post-split child entropies from the parent node's entropy."
      },
      {
        "number": 3,
        "type": "mcq",
        "question": "How does a Regression Decision Tree determine the predicted value at a leaf node?",
        "options": [
          {"letter": "A", "text": "It outputs the class with the majority vote"},
          {"letter": "B", "text": "It takes the average of the target values of the training samples in that leaf node"},
          {"letter": "C", "text": "It uses a sigmoid function to output a probability"},
          {"letter": "D", "text": "It always outputs the maximum value present in the node"}
        ],
        "answer": "B",
        "explanation": "For regression trees, leaf predictions are computed as the mean (average) value of the continuous target values belonging to that leaf."
      },
      {
        "number": 4,
        "type": "mcq",
        "question": "How does Random Forest resolve the high-variance limitation of standard decision trees?",
        "options": [
          {"letter": "A", "text": "By using a single stump with multiple features"},
          {"letter": "B", "text": "By combining multiple decision trees trained on bootstrap samples and random feature subsets"},
          {"letter": "C", "text": "By applying L1 regularization to set weights to zero"},
          {"letter": "D", "text": "By training trees on validation sets only"}
        ],
        "answer": "B",
        "explanation": "Random Forest is an ensemble method. It creates diversity by training trees on bootstrap samples (bagging) and forcing splits to consider only random feature subsets, reducing overfitting."
      },
      {
        "number": 5,
        "type": "mcq",
        "question": "How does Boosting (e.g., AdaBoost) differ from Random Forest?",
        "options": [
          {"letter": "A", "text": "Boosting trains all trees in parallel"},
          {"letter": "B", "text": "Boosting trains models sequentially, giving higher weights to examples misclassified by previous models to correct errors"},
          {"letter": "C", "text": "Boosting does not support classification tasks"},
          {"letter": "D", "text": "Boosting uses bootstrap samples with replacement for every tree"}
        ],
        "answer": "B",
        "explanation": "Boosting is sequential rather than parallel. Each new weak learner (like a stump in AdaBoost) is trained to focus on the hard-to-classify samples that the previous learners got wrong."
      }
    ]
  },
  {
    "examId": "quiz-10",
    "title": "Lec 10 Quiz: Clustering & PCA",
    "questions": [
      {
        "number": 1,
        "type": "mcq",
        "question": "Which of the following is the correct workflow for the K-Means clustering algorithm?",
        "options": [
          {"letter": "A", "text": "Calculate gradients → update weights → compute loss"},
          {"letter": "B", "text": "Initialize K centroids → assign points to nearest centroid → recompute centroids as means → repeat"},
          {"letter": "C", "text": "Build decision tree → calculate entropy → prune branches"},
          {"letter": "D", "text": "Project data onto principal components → calculate WCSS"}
        ],
        "answer": "B",
        "explanation": "K-Means is centroid-based. It begins with initial centroids, assigns points based on distance (usually Euclidean), moves centroids to the mean of assigned points, and repeats until convergence."
      },
      {
        "number": 2,
        "type": "mcq",
        "question": "What does the Elbow Method evaluate to help choose the number of clusters K?",
        "options": [
          {"letter": "A", "text": "The projection error of PCA"},
          {"letter": "B", "text": "The classification accuracy of the validation set"},
          {"letter": "C", "text": "The Within-Cluster Sum of Squares (WCSS) plotted against the number of clusters K"},
          {"letter": "D", "text": "The number of iterations required to converge"}
        ],
        "answer": "C",
        "explanation": "The Elbow Method plots WCSS against K. The 'elbow' point represents a threshold where adding more clusters yields diminishing returns in reducing variance."
      },
      {
        "number": 3,
        "type": "mcq",
        "question": "In which scenario is Anomaly Detection preferred over Supervised Learning?",
        "options": [
          {"letter": "A", "text": "When you have an equal number of positive and negative classes"},
          {"letter": "B", "text": "When you have very few positive examples (anomalies) and a large number of normal examples"},
          {"letter": "C", "text": "When you want to run K-Means to identify T-shirt sizes"},
          {"letter": "D", "text": "When you want to perform regression to predict house prices"}
        ],
        "answer": "B",
        "explanation": "Anomaly detection is used for highly imbalanced cases (like fraud or engine failures) where anomalies can take many unknown forms, making standard classifiers prone to fail."
      },
      {
        "number": 4,
        "type": "mcq",
        "question": "What is the primary objective of Principal Component Analysis (PCA)?",
        "options": [
          {"letter": "A", "text": "To fit a line that minimizes the vertical squared errors to labels"},
          {"letter": "B", "text": "To find a lower-dimensional projection surface that minimizes the orthogonal projection error of the data points"},
          {"letter": "C", "text": "To find association rules between products purchased by customers"},
          {"letter": "D", "text": "To calculate the entropy of continuous features"}
        ],
        "answer": "B",
        "explanation": "PCA is a dimensionality reduction method. It projects data onto lower-dimensional components while minimizing the sum of squared orthogonal projection distances."
      },
      {
        "number": 5,
        "type": "mcq",
        "question": "What preprocessing steps are mandatory before performing Principal Component Analysis (PCA)?",
        "options": [
          {"letter": "A", "text": "One-hot encoding and random restart initialization"},
          {"letter": "B", "text": "Calculating baseline level performance and human error rates"},
          {"letter": "C", "text": "Mean normalization and feature scaling"},
          {"letter": "D", "text": "Pruning hidden layers and choosing the learning rate"}
        ],
        "answer": "C",
        "explanation": "Before running PCA, you must perform mean normalization (so that features have zero mean) and scale them so that feature magnitude differences do not skew the principal components."
      }
    ]
  }
];

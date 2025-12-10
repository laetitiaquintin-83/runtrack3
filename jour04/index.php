<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour 04</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        .job-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .job-link {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            width: fit-content;
        }
        .job-link:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <h1>Jour 04 - Jobs</h1>
    <div class="job-list">
        <a href="./job01/index.php" class="job-link">Job 01</a>
        <a href="./job02/index.php" class="job-link">Job 02</a>
        <a href="./job03/index.php" class="job-link">Job 03</a>
        <a href="./job04/index.php" class="job-link">Job 04</a>
    </div>
    <script src="./script.js"></script> 
</body>
</html>
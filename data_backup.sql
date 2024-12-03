-- MySQL dump 10.13  Distrib 9.0.1, for macos15.1 (arm64)
--
-- Host: localhost    Database: book_management_system
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Authors`
--

DROP TABLE IF EXISTS `Authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Authors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Authors`
--

LOCK TABLES `Authors` WRITE;
/*!40000 ALTER TABLE `Authors` DISABLE KEYS */;
INSERT INTO `Authors` VALUES (1,'Choudhary','2024-12-03 05:43:39','2024-12-03 05:43:39'),(2,'chaturvedi','2024-12-03 05:46:34','2024-12-03 05:46:34'),(3,'keshrwani','2024-12-03 05:46:47','2024-12-03 05:46:47'),(4,'d','2024-12-03 05:48:22','2024-12-03 05:48:22'),(5,'Alakh chaturvedi','2024-12-03 05:53:00','2024-12-03 05:53:00'),(6,'JK Rowling','2024-12-03 05:56:34','2024-12-03 05:56:34'),(7,'Harsh','2024-12-03 06:47:46','2024-12-03 06:47:46'),(8,'ad','2024-12-03 06:50:14','2024-12-03 06:50:14'),(9,'j','2024-12-03 06:52:46','2024-12-03 06:52:46'),(10,'hhhin','2024-12-03 06:59:55','2024-12-03 06:59:55'),(11,'dd','2024-12-03 07:02:19','2024-12-03 07:02:19');
/*!40000 ALTER TABLE `Authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Books`
--

DROP TABLE IF EXISTS `Books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `publishedYear` int DEFAULT NULL,
  `isbn` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `books_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `Authors` (`id`),
  CONSTRAINT `books_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `Categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Books`
--

LOCK TABLES `Books` WRITE;
/*!40000 ALTER TABLE `Books` DISABLE KEYS */;
INSERT INTO `Books` VALUES (1,'Aditya',1,1,2024,'23452242','2024-12-03 05:45:10','2024-12-03 05:45:10'),(2,'Aditya',1,1,2024,'23452243','2024-12-03 05:45:54','2024-12-03 05:45:54'),(3,'Alakh',2,2,2024,'34231','2024-12-03 05:46:34','2024-12-03 05:46:34'),(4,'adarsh',3,3,2024,'2110013135008','2024-12-03 05:46:47','2024-12-03 05:46:47'),(5,'s',4,4,2024,'2222222222','2024-12-03 05:48:22','2024-12-03 05:48:22'),(6,'The great',5,5,2024,'2110013135018','2024-12-03 05:53:00','2024-12-03 05:53:00'),(7,'Harry Potter',6,6,2010,'123244','2024-12-03 05:56:34','2024-12-03 05:56:34'),(8,'Atomic Habits',7,7,2012,'7887086121','2024-12-03 06:47:46','2024-12-03 06:47:46'),(9,'d',8,8,3223,'2324324','2024-12-03 06:50:14','2024-12-03 06:50:14'),(10,'g',9,9,6789,'9897876','2024-12-03 06:52:47','2024-12-03 06:52:47'),(11,'jhbhj',10,10,5667,'786576','2024-12-03 06:59:55','2024-12-03 06:59:55'),(12,'al',11,11,3244,'3424324','2024-12-03 07:02:19','2024-12-03 07:02:19');
/*!40000 ALTER TABLE `Books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Categories`
--

DROP TABLE IF EXISTS `Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES (1,'Science','2024-12-03 05:43:39','2024-12-03 05:43:39'),(2,'comedy','2024-12-03 05:46:34','2024-12-03 05:46:34'),(3,'maths','2024-12-03 05:46:47','2024-12-03 05:46:47'),(4,'w','2024-12-03 05:48:22','2024-12-03 05:48:22'),(5,'Science Fiction','2024-12-03 05:53:00','2024-12-03 05:53:00'),(6,'Fiction','2024-12-03 05:56:34','2024-12-03 05:56:34'),(7,'Habit','2024-12-03 06:47:46','2024-12-03 06:47:46'),(8,'gfg','2024-12-03 06:50:14','2024-12-03 06:50:14'),(9,'k','2024-12-03 06:52:46','2024-12-03 06:52:46'),(10,'hjbjb ','2024-12-03 06:59:55','2024-12-03 06:59:55'),(11,'fdsffs','2024-12-03 07:02:19','2024-12-03 07:02:19');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('2024-11-26-create-tables.js'),('20241128100352-create-books-table.js'),('20241203054251-create-authors-table.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-03 12:44:17

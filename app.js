require('dotenv').config()
const express = require('express');
const { collection, col2 } = require('./mongo');
const routes = require('./routes/routes');
const cors = require('cors');
const shortid = require('shortid');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const { AccessToken } = require('twilio').jwt;
const VideoGrant = AccessToken.VideoGrant;
const http = require('http').createServer(app);
const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGODB_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});
const consultantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isApproved: {
    type: Boolean,
    required: true,
    default: false,
  },
});
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});
const appointmentSchema = new mongoose.Schema({
  mail: {
    type: String,

    required: true,
  },
  consultantId: {
    type: String,
    ref: 'Consultant',
    required: true,
  },
  consultantName: {
    type: String,
    ref: 'Consultant',
    required: true,
  },
  meetId: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Consultant = mongoose.model('consultant', consultantSchema);
const Admin = mongoose.model('admin', adminSchema);
const Appointment = mongoose.model('Appointment', appointmentSchema);
app.get('/', cors(), (req, res) => {});
app.get('/consultant', cors(), (req, res) => {});
app.get('/api/consultants', async (req, res) => {
  try {
    const consultants = await Consultant.find();
    res.json(consultants);
  } catch (error) {
    console.error('Error fetching consultants:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Update counselor approval status
app.patch('/api/counselors/:id/approve', async (req, res) => {
  const { id } = req.params;

  try {
    const counselor = await Consultant.findByIdAndUpdate(
      id,
      {
        isApproved: true,
      },
      { new: true },
    );

    if (!counselor) {
      return res.status(404).json({ error: 'Counselor not found' });
    }

    res.json({ message: 'Counselor approved successfully', counselor });
  } catch (error) {
    console.error('Error approving counselor:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({
      email: email,
      password: password,
    });

    if (check) {
      res.json('exist');
    } else {
      res.json('notexist');
    }
  } catch (e) {
    res.json('fail');
  }
});
app.post('/consultant', async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await Consultant.findOne({
      email: email,
      password: password,
    });

    if (check) {
      res.json('exist');
    } else {
      res.json('notexist');
    }
  } catch (e) {
    res.json('fail');
  }
});
app.post('/admin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await Admin.findOne({
      email: email,
      password: password,
    });

    if (check) {
      res.json('exist');
    } else {
      res.json('notexist');
    }
  } catch (e) {
    res.json('fail');
  }
});
app.post('/registerc', async (req, res) => {
  const { name, email, speciality, password, age } = req.body;

  const data = {
    name: name,
    email: email,
    speciality: speciality,
    password: password,
    age: age,
    isApproved: false,
  };

  try {
    const check = await Consultant.findOne({ email: email });

    if (check) {
      res.json('exist');
    } else {
      await Consultant.insertMany([data]);
      res.json('notexist');
    }
  } catch (e) {
    res.json('fail');
  }
});

app.post('/register', async (req, res) => {
  const { name, email, city, college, password } = req.body;

  const data = {
    name: name,
    email: email,
    city: city,
    college: college,
    password: password,
    addiction: '',
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json('exist');
    } else {
      res.json('notexist');
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json('fail');
  }
});

app.use('/api/routes', routes);

// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static('frontend/build'));
// }
app.get('/api/counselors', async (req, res) => {
  try {
    const consultants = await Consultant.find();
    res.json(consultants);
  } catch (error) {
    console.error('Error fetching consultants:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/userss', async (req, res) => {
  const userEmail = req.query.email;
  try {
    const user = await collection.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/usrs', async (req, res) => {
  try {
    const youser = await collection.find();
    res.json(youser);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/counselors/approval', async (req, res) => {
  const { email } = req.body;

  try {
    const counselor = await Consultant.findOne({ email });

    if (!counselor) {
      return res.status(404).json({ error: 'Counselor not found' });
    }

    res.json({ isApproved: counselor.isApproved });
  } catch (error) {
    console.error('Error checking counselor approval status:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/api/appointments/requests', async (req, res) => {
  try {
    const appointmentRequests = await Appointment.find();
    console.log();
    res.json(appointmentRequests);
  } catch (error) {
    console.error('Error fetching appointment requests:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/answers', async (req, res) => {
  const quizinfo = req.body.quizInfo;

  const data = {
    quizinfo: quizinfo,
  };

  try {
    await col2.insertMany([data]).catch((e) => {
      alert('wrong details');
      console.log(e);
    });
  } catch (e) {
    res.json('fail');
  }
});
// Book appointment route
app.post('/api/appointments/book', async (req, res) => {
  const { mail, consultantId, consultantName } = req.body;

  try {
    // Save the appointment data to the database
    const appointment = new Appointment({
      mail,
      consultantId,
      consultantName,
      meetId: null,
    });
    await appointment.save();

    res.json({ message: 'Appointment booked successfully' });
  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
const generateUniqueMeetingCode = async () => {
  const meetingCode = shortid.generate();
  try {
    const app = await Appointment.findOne({ meetId: meetingCode });
    if (!app) {
      return meetingCode;
    }
  } catch (e) {
    console.error('ID exists', e);
  }
};
app.patch('/api/appointments/meeting', async (req, res) => {
  const { mail } = req.body;
  console.log('EMAIL' + mail);
  try {
    const meetingCode = await generateUniqueMeetingCode();
    console.log(meetingCode);
    const appointment = await Appointment.findOne({ mail: mail });
    console.log(appointment);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    appointment.meetId = meetingCode;
    await appointment.save();

    res.json({ message: 'Meeting code generated successfully', appointment });
  } catch (error) {
    console.error('Error generating meeting code:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/api/appointments/user/:emailId', async (req, res) => {
  const mail = req.params.emailId;
  console.log(mail);
  try {
    const appointments = await Appointment.find({ mail: mail });
    console.log(appointments);
    // add consultant name in appointments by finding consultant name from consultant database using id
    // const consultant = await Consultant.findById(appointments.consultantId);
    // appointments.consultantName = consultant.name;
    // console.log(appointments);

    res.json({ appointments });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});
app.get('/api/consultants/:consultantId', async (req, res) => {
  const consultantId = req.params.consultantId;

  try {
    const consultant = await Consultant.findById(consultantId);

    if (!consultant) {
      return res.status(404).json({ error: 'Consultant not found' });
    }

    res.json({ consultant });
  } catch (error) {
    console.error('Error fetching consultant details:', error);
    res.status(500).json({ error: 'Failed to fetch consultant details' });
  }
});
app.post('/drugtype', async (req, res) => {
  const { email, addiction } = req.body;

  const data = {
    email: email,
    addiction: addiction,
  };

  try {
    const check = await collection.findOne({ email });
    if (!check) {
      return res.status(404).json({ error: 'Document not found' });
    }
    const result = await collection.updateOne(
      { _id: check._id },
      { $set: { addiction } },
    );
    res.json({ message: 'Document updated successfully' });
  } catch (e) {
    res.json('fail');
  }
});
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

app.post('/token', (req, res) => {
  const identity = req.body.identity;
  const roomName = req.body.roomName;
  const accountSid = 'AC38909233da0177158c0c27f70c6bfa99';
  const apiKey = 'SK2dbbbcacc139c14c391842b44ad993e8';
  const apiSecret = 'fgNWiIGLToDyL1dWmed5GdXAy8jpGcD4';
  const token = new AccessToken(accountSid, apiKey, apiSecret, {
    identity: identity,
  });

  const videoGrant = new VideoGrant({
    room: roomName,
  });
  token.addGrant(videoGrant);

  res.json({ token: token.toJwt() });
});
const PORT = 8001;
http.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
app.listen(8000, () => {
  console.log('Port Connected!');
});
